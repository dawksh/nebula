import Button from "@/components/ui/button";
import { generateRandomString } from "@/lib/utils";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Spotify = () => {
    const [spotify, setSpotify] = useState();
    const generateUrl = () => {
        var client_id = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT as string;
        var redirect_uri =
            "https://0fd0-103-214-61-194.ngrok-free.app/callback";

        var state = generateRandomString(16);

        var scope = "user-read-private user-read-email";

        var url = "https://accounts.spotify.com/authorize";
        url += "?response_type=token";
        url += "&client_id=" + encodeURIComponent(client_id);
        url += "&scope=" + encodeURIComponent(scope);
        url += "&redirect_uri=" + encodeURIComponent(redirect_uri);
        url += "&state=" + encodeURIComponent(state);
        return url;
    };

    useEffect(() => {
        const data = localStorage.getItem("spotifyData");
        if (data) setSpotify(JSON.parse(data));
    }, []);

    return (
        <div
            className={`flex items-center justify-center font-semibold flex-col`}
        >
            <div>verify and get onchain spotify id</div>
            {!spotify && (
                <Button className="my-4" onClick={() => { }}>
                    <Link href={generateUrl()}>sign in</Link>
                </Button>
            )}
        </div>
    );
};

export default Spotify;
