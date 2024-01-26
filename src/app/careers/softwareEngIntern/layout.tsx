import RootLayout from "app/layout" 

export const metadata = {
	title: "About Us | AuroByte",
}

export default function (props: {
	children: React.ReactNode;
}) {
	return <RootLayout {...props} />
}