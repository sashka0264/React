let settingSend = (store) => {
    const group = store._state.groupBy.selectedGroup,
        platform = store._state.platformPage.selectedPlatform["value"],
        from = store._state.datesPage.from,
        to = store._state.datesPage.to,
        browsers = store._state.browser.requestBrowser,
        sistems = store._state.sistem.requestSistem,
        limit = store._state.page.usePage*25;

    const promise = fetch(`http://localhost:3000/api/v1/statistics?groupBy=${group}&platform=${platform}
        &from=${from}
        &to=${to}
        ${browsers}
        ${sistems}
        &limit=${limit}`
    )

    .then( (response) => {
        return response.json();
    })

    .then( (data) => {
        store._state.output = data;
        store._state.page.pages = Math.ceil(data.count/25);
    })

    .catch( (error) => {
        console.error(`Ошибка при соединении с сервером: '${error.message}'`);
    });

    return promise;
}

export default settingSend;