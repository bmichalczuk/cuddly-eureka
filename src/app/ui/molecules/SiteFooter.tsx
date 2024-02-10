import Link from "next/link";

export const SiteFooter = () => {
	return (
		<footer className=" text-center">
			<Link className="hover:underline" href="/regulamin">
				Regulamin
			</Link>
			<span className="mx-5 font-bold">@2024</span>
			<Link className="hover:underline" href="/polityka-prywatnosci">
				Polityka Prywatnosci
			</Link>
		</footer>
	);
};
