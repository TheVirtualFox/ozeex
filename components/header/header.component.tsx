import React from 'react';
import {HeaderContainer, Logo} from "./header.styled";
import Link from "next/link";

/**
 * Заголовок сайта, в котором отображается логотип
 * @constructor
 */
export function Header() {
    return (
        <HeaderContainer>
            <Link href="/">
                <Logo>OZEEX</Logo>
            </Link>
        </HeaderContainer>
    );
}
