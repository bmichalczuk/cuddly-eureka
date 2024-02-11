export default function ProductPage({ params }: { params: { productId: string } }) {
	return <div>{params.productId}</div>;
}
