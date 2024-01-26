import RootLayout from "app/layout" 

export const metadata = {
	title: "Software Engineer - iOS",
}

export default function (props: {
	children: React.ReactNode;
}) {
	return <RootLayout {...props} />
}