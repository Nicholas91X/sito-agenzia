import React from 'react';
import { useRouter } from 'next/router';
import { StyledBox, StyledButton, StyledDrawer, StyledLogoContainer, StyledLogoImage } from './MobileMenudrawer.styles';

export default function MobileMenuDrawer({ open, onClose, menuItems, activeMenu, setActiveMenu }) {
    const router = useRouter();

    return (
        <StyledDrawer anchor="left" open={open} onClose={onClose}>
            {/* Contenitore per il Logo */}
            <StyledLogoContainer onClick={() => router.push("/")}>
                <StyledLogoImage src="/assets/images/team.webp" alt="Logo" />
            </StyledLogoContainer>

            {/* Menu Items */}
            <StyledBox>
                {menuItems.map((item) => (
                    <StyledButton
                        key={item.name}
                        active={activeMenu === item.name}
                        onClick={() => {
                            setActiveMenu(item.name);
                            router.push(item.path);
                            onClose();
                        }}
                    >
                        {item.name}
                    </StyledButton>
                ))}
            </StyledBox>
        </StyledDrawer>
    );
}