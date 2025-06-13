import { Request, Response } from "express";
import { InvoiceService } from "@/modules/invoice/invoice.service";

const service = new InvoiceService();

export class InvoiceController {
    async getAll(req: Request, res: Response){
        const invoices = await service.getAll();
        res.json(invoices);
        return;
    }

    async getById(req: Request, res: Response){
        const id = parseInt(req.params.id);
        const invoice = await service.getById(id);
        if (!invoice){
            res.status(404).json({ message: "Invoice not found" });
            return;
        }

        res.json(invoice);
        return;
    }

    async create(req: Request, res: Response){
        const invoice = await service.create(req.body);
        res.status(201).json(invoice);
        return;
    }

    async update(req: Request, res: Response){
        const id = parseInt(req.params.id);
        const invoice = await service.update(id, req.body);
        if(!invoice){
            res.status(404).json({ message: "Invoice not found" });
            return;
        }
        res.json(invoice);
        return;
    }

    async delete(req: Request, res: Response){
        const id = parseInt(req.params.id);
        const invoice = await service.delete(id);
        if(!invoice){
            res.status(404).json({ message: "Invoice not found" });
            return;
        }
        res.status(204).send();
        return;
    }
}