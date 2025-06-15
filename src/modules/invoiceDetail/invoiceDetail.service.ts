import { prisma } from "@/config/prisma"
import {
  InvoiceDetailCreateInput,
  InvoiceDetailUpdateInput
} from "@/modules/invoiceDetail/invoiceDetail.types"
import { PaymentChannel } from "@prisma/client";

export class InvoiceDetailService {
  getAll() {
    return prisma.invoiceDetail.findMany()
  }

  getById(id: number) {
    return prisma.invoiceDetail.findUnique({ where: { id } })
  }

  async create(data: InvoiceDetailCreateInput) {
     const product = await prisma.product.findUnique({
      where: { id: data.product_id }
    });

    if(!product){
      throw new Error("Product not found")
    }

    const invoice = await prisma.invoice.findUnique({
      where: { id: data.invoice_id }
    })

    if(!invoice){
      throw new Error("Invoice not found")
    }

    const IGV_RATE = 0.18
    const baseSubtotal  = data.unit_price * data.quantity

    const hasIgv = invoice.payment_channel !== PaymentChannel.sale_note;
    const igv_amount = hasIgv ? baseSubtotal * IGV_RATE : 0;
    const subtotal = baseSubtotal + igv_amount;

    return prisma.invoiceDetail.create({
      data: {
        invoice_id: data.invoice_id,
        product_id: data.product_id,
        product_name: product.name,
        unit: product.unit,
        quantity: data.quantity,
        unit_price: data.unit_price,
        subtotal,
        igv_amount,
        has_igv_included: hasIgv
      }
    });

  }

  async update(id: number, data: InvoiceDetailUpdateInput) {
    const existingInvoiceDetail = await prisma.invoiceDetail.findUnique({
      where: { id },
      include: { invoice: true, product: true }
    })

    if(!existingInvoiceDetail){
      throw new Error("InvoiceDetail not found")
    }

    const updatedUnitPrice = data.unit_price ?? existingInvoiceDetail.unit_price;
    const updatedQuantity = data.quantity ?? existingInvoiceDetail.quantity;

    const IGV_RATE = 0.18
    const baseSubtotal = Number(updatedUnitPrice) * Number(updatedQuantity);
    
    const hasIgv = existingInvoiceDetail.invoice.payment_channel !== PaymentChannel.sale_note;
    const igv_amount = hasIgv ? baseSubtotal * IGV_RATE : 0;
    const subtotal = baseSubtotal + igv_amount;

     return prisma.invoiceDetail.update({
    where: { id },
    data: {
      ...data,
      unit_price: updatedUnitPrice,
      quantity: updatedQuantity,
      subtotal,
      igv_amount,
      has_igv_included: hasIgv,
      // en caso quieras forzar nombre/unidad actualizada:
      product_name: existingInvoiceDetail.product.name,
      unit: existingInvoiceDetail.product.unit
    }
  });

  }

  delete(id: number) {
    return prisma.invoiceDetail.delete({ where: { id } })
  }
}