import { TextField, Button, Container, Box } from '@mui/material';
import { useFormik } from 'formik';
import * as sha1 from 'js-sha1';
import copy from 'copy-to-clipboard';
import * as yup from 'yup';



const imeiRegex = /^[0-9]{15}$/;
var unlockCodeFeatures = {
    text: "",
    disabled: true
};

const validationSchema = yup.object({
    // validate the imei
    imeiField: yup
        .string('Enter your IMEI')
        .matches(imeiRegex, 'IMEI must be 15 digits long')
});




export default function UnlockGenerator() {
    const calculateUnlockCode = (imei) => {
        const imeiHash = sha1(imei + "simlock");
        const unlockCode = imeiHash.substring(0, 8);
        return unlockCode;
    }

    const formik = useFormik({
        initialValues: {
            imeiField: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            unlockCodeFeatures.text = calculateUnlockCode(values.imeiField);
            unlockCodeFeatures.disabled = false;

        },
    });


    return (
        <Container maxWidth="sm">
            <TextField
                id="imeiField"
                label="Your Device's IMEI"
                variant="outlined"
                onChange={formik.handleChange}
                error={formik.touched.imeiField && Boolean(formik.errors.imeiField)}
                helperText={formik.touched.imeiField && formik.errors.imeiField}
                fullWidth
                style={{margin: "5px" }}

            />
            <br />
            <Button
                variant="contained"
                color="primary"
                type="submit"
                onClick={formik.handleSubmit}
                fullWidth
                style={{margin: "5px" }}

            >
                Generate Unlock Code
            </Button>
            <br />

            <TextField
                disabled={unlockCodeFeatures.disabled}
                id="unlockCodeField"
                label="Unlock Code"
                variant="outlined"
                value={unlockCodeFeatures.text}
                InputProps={{ readOnly: true, }}
                fullWidth
                style={{margin: "5px" }}

            />
            <br />

            <Button
                disabled={unlockCodeFeatures.disabled}
                variant="contained" color="primary"
                onClick={() => copy(unlockCodeField.value, { message: 'Copied!', debug: true, })}
                fullWidth
                style={{margin: "5px" }}

            >
                Copy to clipboard
            </Button>
        </Container>

    );
}
