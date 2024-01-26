import RootLayout from "app/layout" 

export const metadata = {
	title: "Business Analyst Intern",
}

export default function (props: {
	children: React.ReactNode;
}) {
	return <RootLayout {...props} />
}