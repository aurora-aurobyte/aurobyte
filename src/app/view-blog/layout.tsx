import RootLayout from "app/layout" 

export const metadata = {
	title: "View Blog | AuroByte",
}

export default function (props: {
	children: React.ReactNode;
}) {
	return <RootLayout {...props} />
}