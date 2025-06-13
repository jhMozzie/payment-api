// prisma/seed.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.customer.createMany({
    data: [
      {
        name: "COMPAÑIA PRINSS E.I.R.L",
        tax_id: "20613088483",
        address: "AV. ALEJANDRO TIRADO NRO. 762 URB. SANTA BEATRIZ LIMA - LIMA - LIMA"
      },
      {
        name: "W & M PRODUCTOS DE LIMPIEZA E.I.R.L",
        tax_id: "20554898158",
        address: "CAL.SANTA ROSA MZA. O LOTE. 25 URB. LAS FRESAS PROV. CONST. DEL CALLAO - PROV. CONST. DEL CALLAO - CALLAO"
      }
    ]
  });

  console.log("🌱 Seeding completed successfully.");
}

main()
  .catch((e) => {
    console.error("❌ Seeding failed:", e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });