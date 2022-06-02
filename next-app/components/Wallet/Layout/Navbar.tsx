import { Box } from "@chakra-ui/react"
import ColorModeToggle from "../Buttons/ThemeToggle"
import CallToAction from "../Buttons/CallToAction"
import React from "react"

function Navbar() {
    return (
        <Box className="flex justify-between align-middle flex-1 flex-row w-full py-4">
            <Box>{/* logo image */}Accend</Box>
            <Box>
                <ColorModeToggle />
                <CallToAction />
            </Box>
        </Box>
    )
}

export default Navbar
