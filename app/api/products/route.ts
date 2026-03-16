import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    // 1. Átvesszük az adatokat a webadminból
    const body = await request.json();
    const { name, category, price, description, imageUrl } = body;

    // 2. Beleírjuk az adatbázis "Product" táblájába
    const newProduct = await prisma.product.create({
      data: {
        name,
        category,
        price: parseInt(price), // Számmá alakítjuk az árat
        description,
        imageUrl,
      },
    });

    // 3. Visszaszólunk, hogy minden szuper
    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    console.error("Adatbázis hiba:", error);
    return NextResponse.json({ error: "Hiba történt a mentés során." }, { status: 500 });
  }
}