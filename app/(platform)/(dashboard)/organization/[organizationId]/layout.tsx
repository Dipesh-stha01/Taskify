import { OrgControl } from "./_components/org-control";

const OrganizatiomIdLayout = ({
    children
}:{
    children: React.ReactNode
}) =>{
    return(
        <>
        <OrgControl />
        {children}
        </>
    );
};

export default OrganizatiomIdLayout;