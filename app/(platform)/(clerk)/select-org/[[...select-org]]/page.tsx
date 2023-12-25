import { OrganizationList } from "@clerk/nextjs";

export default function CreateOrganizationPage(){
    return (
        <OrganizationList 
        hidePersonal
        afterSelectOrganizationUrl={"/organization/:id"} //:id is identified as slug
        afterCreateOrganizationUrl={"/organization/:id"}
        />
        
    );
};