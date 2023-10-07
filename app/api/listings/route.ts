import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();

  const {
    title,
    description,
    bathroomCount,
    roomCount,
    price,
    location,
    guestCount,
    category,
    imageSrc,
  } = body;

  const listing = await prisma.listing.create({
    data: {
      title,
      description,
      bathroomCount,
      roomCount,
      guestCount,
      price: parseInt(price, 10),
      category,
      imageSrc,
      locationValue: location.value,
      userId: currentUser.id,
    },
  });

  return NextResponse.json(listing);
}
