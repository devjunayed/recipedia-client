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
      setIsMobile(window.innerWidth < 768); // Set mobile breakpoint
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
    <div className="border-b-2 bg-white z-50 w-full">
      <nav className="flex items-center justify-between px-4 lg:px-10">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            width={70}
            height={70}
            src="/logo.png"
            alt="logo"
            preview={false}
          />
        </Link>

        <div className="flex items-center gap-4">
          {/* Desktop Menu */}
          {!isMobile ? (
            <>
              <Menu
                mode="horizontal"
                className="flex space-x-2 text-md font-semibold uppercase bg-transparent border-none"
                items={menuItems}
              />
            </>
          ) : (
            // Mobile Hamburger Button
            <Button
              icon={<MenuOutlined />}
              onClick={showDrawer}
              className="text-xl p-2 bg-primary text-white"
            />
          )}

          {/* Drawer for Mobile Menu */}
          <Drawer
            title="Menu"
            placement="right"
            onClose={onClose}
            visible={isDrawerVisible}
          >
            <Menu mode="vertical" className="text-lg" items={menuItems} />
          </Drawer>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
