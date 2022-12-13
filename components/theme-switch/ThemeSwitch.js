import { useTheme as useNextTheme } from "next-themes";
import { Switch, useTheme } from "@nextui-org/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export default function ThemeSwitch() {
    const { setTheme } = useNextTheme();
    const { isDark } = useTheme();

    return (
        <Switch
            size="md"
            color="secondary"
            checked={isDark}
            onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
            iconOn={<FontAwesomeIcon icon={faSun} />}
            iconOff={<FontAwesomeIcon icon={faMoon} />}
            css={{
                position: "relative",
                bottom: "3px",
            }}
        />
    );
}
