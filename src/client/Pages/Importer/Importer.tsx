import React from "react";
import { uploadFile } from "client/Api";
import { command } from "ebrap-ui";

export default function Importer() {
    const [file, setFile] = React.useState<File>();
    const [loading, setLoading] = React.useState<boolean>(false);

    const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);
        if (files.length > 1) {
            window.alert("Only 1 file at a time.");
            return;
        }
        if (files.length === 0) {
            window.alert("Please select a file.");
            return;
        }

        const file = files[0];
        if (!file.name.endsWith(".csv")) {
            window.alert("File must be of type '.csv'");
            return;
        }
        e.target.value = "";
        setFile(file);
    };
    const submit = async () => {
        if (!file) return;
        setLoading(true);
        const resp = await uploadFile(file);
        if (!resp.success) {
            await command.alert("Error uploading file");
        }
        setLoading(false);
        setFile(undefined);
    };
    const abort = () => setFile(undefined);

    if (loading) {
        return (
            <main>
                <div>Loading...</div>
            </main>
        );
    }

    return (
        <main>
            <h2>Import a csv</h2>
            {!file && (
                <div>
                    <label htmlFor="file-input">Upload Players in a CSV</label>
                    <br />
                    <input type="file" id="file-input" onChange={handleFile} />
                </div>
            )}

            {!!file && (
                <div>
                    <h2>File Loaded, Launch?</h2>
                    <button onClick={abort}>ABORT</button>
                    <button onClick={submit}>LAUNCH</button>
                </div>
            )}
        </main>
    );
}
