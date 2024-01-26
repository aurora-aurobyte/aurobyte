import RootLayout from "app/layout" 

export const metadata = {
	title: "UI/UX Designer"
}

export default function (props: {
	children: React.ReactNode;
}) {
	return <RootLayout {...props} />
}