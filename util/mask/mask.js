
function mask() {
    const urlInput = document.getElementById('urlInput').value;
    const encodedUrl = btoa(urlInput);
    const maskUrl = `http://lagthesystem.dev/util/ref?data=${encodedUrl}`;
    document.getElementById('urlInput').value = maskUrl;
    navigator.clipboard.writeText(maskUrl);
}