const faturamentoMensal = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53,
};

const totalFaturamentoMensal = Object.values(faturamentoMensal).reduce(
    (total, valor) => total + valor
);

const percentuaisRepresentacao = {};
for (const estado in faturamentoMensal) {
    const percentual =
        (faturamentoMensal[estado] / totalFaturamentoMensal) * 100;
    percentuaisRepresentacao[estado] = percentual.toFixed(2);
}

console.log("Percentual de representação por estado:");
for (const estado in percentuaisRepresentacao) {
    console.log(`${estado}: ${percentuaisRepresentacao[estado]}%`);
}
