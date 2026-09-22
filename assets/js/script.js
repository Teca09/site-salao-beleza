document.addEventListener('DOMContentLoaded', () => {
    // Gestão do Acordeão Editorial
    const accordionPanels = document.querySelectorAll('.accordion-panel');

    accordionPanels.forEach(panel => {
        const trigger = panel.querySelector('.accordion-trigger');
        const body = panel.querySelector('.accordion-body');

        trigger.addEventListener('click', () => {
            const isOpen = panel.classList.contains('active');

            // Fechar todos os painéis para manter limpeza visual
            accordionPanels.forEach(p => {
                p.classList.remove('active');
                p.querySelector('.accordion-trigger').setAttribute('aria-expanded', 'false');
                p.querySelector('.accordion-body').style.maxHeight = null;
            });

            if (!isOpen) {
                panel.classList.add('active');
                trigger.setAttribute('aria-expanded', 'true');
                body.style.maxHeight = body.scrollHeight + 'px';
            }
        });
    });

    // Abrir o primeiro painel por defeito com cálculo exato de altura
    const firstPanel = document.querySelector('.accordion-panel');
    if (firstPanel) {
        firstPanel.classList.add('active');
        const firstTrigger = firstPanel.querySelector('.accordion-trigger');
        const firstBody = firstPanel.querySelector('.accordion-body');
        firstTrigger.setAttribute('aria-expanded', 'true');
        firstBody.style.maxHeight = firstBody.scrollHeight + 'px';
    }

    // Menu Mobile Toggle
    const menuToggle = document.getElementById('menuToggle');
    const navContainer = document.getElementById('navContainer');

    if (menuToggle && navContainer) {
        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            navContainer.classList.toggle('open');
        });
    }
});