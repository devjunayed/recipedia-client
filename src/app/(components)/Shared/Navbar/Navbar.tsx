"use client";
import React, { useState, useEffect } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { Button, Drawer, Image, Menu } from "antd";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const showDrawer = () => setIsDrawerVisible(true);
  const onClose = () => setIsDrawerVisible(false);

  const menuItems = [
    { label: <Link href="/">Home</Link>, key: "home" },
    { label: <Link href="/about">About</Link>, key: "about" },
    { label: <Link href="/contact">Contact</Link>, key: "contact" },
  ];

  if (!isClient) {
    return null;
  }

  return (
    <div className="border-b-2  bg-white z-50  w-full ">
      <nav style={styles.navbar} className="mx-10">
        <Link href="/">
          <Image width={70} height={70} src="/logo.png" alt="logo" />
        </Link>

        {/* Desktop Menu */}
        {!isMobile ? (
          <Menu mode="horizontal" items={menuItems} style={styles.menu} />
        ) : (
          // Mobile Hamburger Button
          <Button
            icon={<MenuOutlined />}
            onClick={showDrawer}
            type="primary"
            style={styles.hamburgerButton}
          />
        )}

        {/* Drawer for Mobile Menu */}
        <Drawer
          title="Menu"
          placement="right"
          onClose={onClose}
          visible={isDrawerVisible}
        >
          <Menu mode="vertical" items={menuItems} />
        </Drawer>
      </nav>
    </div>
  );
};

// Inline styles for the navbar
const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFF", // Primary color
  },

  menu: {
    backgroundColor: "transparent",
    borderBottom: "none",
  },
  hamburgerButton: {
    backgroundColor: "#FF7A59",
    border: "none",
  },
};

export default Navbar;
