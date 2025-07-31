function gerarDiaDaSemana() {
    const diaDaSemana = new Date().toLocaleDateString("pt-BR", 
        { weekday: 'long'}
    );
    const hora = new Date().toLocaleTimeString("pt-BR", 
        { hour: '2-digit', minute: '2-digit' });
    const data = new Date().toLocaleDateString("pt-BR")
    const dataCompleta = `${diaDaSemana} (${data}) às ${hora}`;

    return dataCompleta;
}

export default gerarDiaDaSemana;