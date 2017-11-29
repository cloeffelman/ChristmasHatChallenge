export const snow = {
    particles: {
        number: {
        value: 300
        },
        size: {
        value: 5,
        random: true,
        },
        opacity: {
        random: true
        },
        move: {
        direction: 'bottom'
        },
        line_linked: {
        enable: false
        }
    },
    interactivity: {
        events: {
        onhover: {
            enable: true,
            mode: 'repulse'
        },
        onclick: {
            enable: true,
            mode: 'bubble'
        }
        },
        modes: {
        repulse: {
            distance: 100,
            duration: 0.4
        },
        bubble: {
            distance: 100,
            size: 10
        }
        }
    }
}