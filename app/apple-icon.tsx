import { ImageResponse } from "next/og";

export const size = {
    width: 180,
    height: 180,
};
export const contentType = "image/png";

export default function Icon() {
    return new ImageResponse(
        <div
            style={{
                fontSize: 100,
                background: "#020617",
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 36,
            }}
        >
            <span
                style={{
                    background: "linear-gradient(135deg, #14b8a6, #f472b6)",
                    backgroundClip: "text",
                    color: "transparent",
                    fontWeight: 800,
                }}
            >
                M
            </span>
        </div>,
        {
            ...size,
        },
    );
}
