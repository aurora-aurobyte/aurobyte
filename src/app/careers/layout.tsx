import RootLayout from "app/layout" 

export const metadata = {
	title: "Careers | AuroByte",
}

export default function (props: {
	children: React.ReactNode;
}) {
	return <RootLayout {...props} />
}