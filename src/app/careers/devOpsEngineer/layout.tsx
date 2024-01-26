import RootLayout from "app/layout" 

export const metadata = {
	title: "DevOps Engineer",
}

export default function (props: {
	children: React.ReactNode;
}) {
	return <RootLayout {...props} />
}