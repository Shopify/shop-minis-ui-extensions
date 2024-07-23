export function calculateDiscountPercentage(
  originalPrice: {amount: string},
  discountedPrice: {amount: string}
): string {
  const percentageDiscount: number =
    ((parseInt(originalPrice.amount, 10) -
      parseInt(discountedPrice.amount, 10)) /
      parseInt(originalPrice.amount, 10)) *
    100

  return percentageDiscount.toFixed(0).toString()
}
