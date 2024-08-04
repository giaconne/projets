//console.log('Hello World')
document.addEventListener('DOMContentLoaded', () => {
    //Récuperation des éléments
    const exploreTab = document.getElementById('explore');
    const followingTab = document.getElementById('following');

    //Gestionnaire de clic pour l'onglet "Pour vous"
    exploreTab.addEventListener('click', () => {
        exploreTab.classList.add('page-tab-active');
        exploreTab.classList.remove('page-tab-disabled');
        followingTab.classList.add('page-tab-disabled');
        followingTab.classList.remove('page-tab-active');

        //Logique supplémentaire pour afficher le contenu de l'ongle "Pour vous"
        console.log('Pour vous');
    });

    //Gestionnaire de clic pour l'onglet "Abonnements"
    followingTab.addEventListener('click', () => {
        followingTab.classList.add('page-tab-active');
        followingTab.classList.remove('page-tab-disabled');
        exploreTab.classList.add('page-tab-disabled');
        exploreTab.classList.remove('page-tab-active');
        //Logique supplémentaire pour afficher le contenu de l'onglet "Abonnements"

    });
});