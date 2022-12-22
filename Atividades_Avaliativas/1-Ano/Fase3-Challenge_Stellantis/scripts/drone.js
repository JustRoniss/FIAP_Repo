let url =  'https://onedrive.live.com/view.aspx?resid=7BF745207BF5FFF5!91612&ithint=file%2cpptx&nav=eyJzSWQiOjI3OCwiY0lkIjoyMDY5MzkzMDI2fQ&authkey=!AN8brX7TxQ_d-zY';

function exibirApresentacao(){
    if (window.confirm("Ficamos felizes que você tenha interesse em ver nossa apresentação 😀\n\nAo clicar em OK iremos abrir a apresentação em outra aba para você!"));
    {
    const win = window.open(url, '_blank');
    }

}