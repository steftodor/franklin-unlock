import { Typography, Link } from "@mui/material";


export default function Guide() {



    return (
        <Typography
            variant="body1"
            component="p"
            gutterBottom
            style={{ margin: "5px" }}
        >
            This app generates an unlock code for your T-Mobile Frankin T9 device.
            <br />
            <br />
            To use it, you need to be able to access your device's settings.
            <br />
            <br />
            To unlock your device, you can use the following method:
            <br />
            <br />
            1. Connect to your Mobile Hotspot.
            <br />
            2. Go to it's web interface. <Link href="http://mobile.hotspot/">http://mobile.hotspot/</Link>
            <br />
            3. Navigate to the "About" page and locate the 15 digit IMEI number. <Link href="http://mobile.hotspot/about/">http://mobile.hotspot/about/</Link>
            <br />
            4. Copy the number and paste it into the "Your Device's IMEI" field.
            <br />
            5. Click the "Generate Unlock Code" button.
            <br />
            6. The code will be displayed in the "Unlock Code" field.
            <br />
            7. Click the "Copy to clipboard" button.
            <br />
            8. Navigate to the "Settings" page on the device.
            <br />
            9. Open "Mobile Network", then "SIM". <Link href="http://mobile.hotspot/settings/mobile_network-sim.html">http://mobile.hotspot/settings/mobile_network-sim.html</Link>
            <br />
            10. Under the Carrier Unlock section:
            <br />
            &emsp;- Set the "Desired Action" to "Carrier Unlock"
            <br />
            &emsp;- Paste the generate unlock code into the "Enter Unlock Code" field.
            <br />
            &emsp;- Click the "Unlock" button.
            <br />
            11. The device will now reboot and should allow the use of any non T-Mobile sim card.
            <br />
        </Typography>
        // Include image here


    );
}
