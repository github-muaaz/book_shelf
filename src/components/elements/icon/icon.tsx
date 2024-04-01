import React from "react";
import { Edit } from "./icons/edit";
import { Bell } from "./icons/bell";
import { Check } from "./icons/check";
import { Attachment } from "./icons/attachment";
import { Search } from "./icons/search";
import { Delete } from "./icons/delete";
import { Close } from "./icons/close";
import { Logo } from "./icons/logo";

interface Props {
    icon: string;
    color?: string;
    pointer?: boolean;
    onClick?: () => void;
}

const Icon: React.FC<Props> = ({ icon, color, pointer, onClick, ...rest }) => {

    const icons: { [key: string]: JSX.Element } = {
        checked: <Check stroke={color} {...rest} />,
        edit: <Edit stroke={color} {...rest} />,
        bell: <Bell stroke={color} {...rest} />,
        attachment: <Attachment stroke={color} {...rest} />,
        search: <Search stroke={color} {...rest} />,
        delete: <Delete stroke={color} {...rest} />,
        close: <Close stroke={color} {...rest} />,
        logo: <Logo stroke={color} {...rest} />
    };

    return (
        <div onClick={onClick} style={{cursor: pointer ? "pointer" : "" }}>
            {icons[icon]}
        </div>
    );
};

export default Icon;
