import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import cashExpense from '../assets/images/homepage/cashExpense.svg';
import bankExpense from '../assets/images/homepage/bankExpense.svg';
import receipt from '../assets/images/homepage/receipt.svg';
import createVoucher from '../assets/images/homepage/createVoucher.svg';
import other from '../assets/images/homepage/other.svg';
import views from '../assets/images/homepage/Views.svg';
import dashboardIcon from '../assets/images/homepage/dashboard.svg';
import arrowUp from '../assets/images/homepage/arrowUp.svg';
import fiscalConnectLogo from '../assets/images/homepage/fiscalConnectLogo.svg';

const Navdata = () => {
    const history = useNavigate();
    //state data
    const [isDashboard, setIsDashboard] = useState(false);
    const [isLeadManagement, setIsLeadManagement] = useState(false);
    const [isContactManagement, setIsContactManagement] = useState(false);
    const [isTicketManagement, setIsTicketManagement] = useState(false);

    const [iscurrentState, setIscurrentState] = useState('Dashboard');

    function updateIconSidebar(e) {
        if (e && e.target && e.target.getAttribute("subitems")) {
            const ul = document.getElementById("two-column-menu");
            const iconItems = ul.querySelectorAll(".nav-icon.active");
            let activeIconItems = [...iconItems];
            activeIconItems.forEach((item) => {
                item.classList.remove("active");
                var id = item.getAttribute("subitems");
                if (document.getElementById(id)) {
                    document.getElementById(id).classList.remove("show");
                }
            });
        }
    }

    useEffect(() => {
        document.body.classList.remove('twocolumn-panel');
        if (iscurrentState !== 'Dashboard') {
            setIsDashboard(false);
        }
        if (iscurrentState !== 'Lead Management') {
            setIsLeadManagement(false);
        }

        if (iscurrentState !== 'Contact Management') {
            setIsContactManagement(false);
        }

        if (iscurrentState !== 'Ticket Management') {
            setIsTicketManagement(false);
        }
    }, [
        history,
        isDashboard,
        isLeadManagement,
        isContactManagement,
        isTicketManagement
    ]);

    const menuItems = [
        {
            label: "Menu",
            isHeader: true,
        },
        {
            id: "home",
            label: "Home",
            image: dashboardIcon,
            icon: "ri-home-5-line",
            image: dashboardIcon,
            link: "/#",
            click: function (e) {
                e.preventDefault();
                setIsDashboard(!isDashboard);
                setIscurrentState('Dashboard');
                updateIconSidebar(e);
            },
            stateVariables: isDashboard,
            subItems: [
                { id: 'dashboard', label: 'Dashboard', link: '/dashboard', dashboardIcon }
            ],
        },
        {
            id: 'lead-management',
            label: 'Lead Management',
            icon: 'ri-user-follow-line',
            link: '/#',
            click: function (e) {
                e.preventDefault();
                setIsLeadManagement(!isLeadManagement);
                setIscurrentState('Lead Management');
                updateIconSidebar(e);
            },
            stateVariables: isLeadManagement,
            subItems: [
                { id: 'leadCategory', label: 'Category', icon: '', link: '/leadCategory' },
                { id: 'leads', label: 'Leads', icon: '', link: '/leads' }
            ]
        },
        {
            id: 'contact-management',
            label: 'Contact Management',
            icon: ' ri-contacts-book-line',
            link: '/#',
            click: function (e) {
                e.preventDefault();
                setIsContactManagement(!isContactManagement);
                setIscurrentState('Contact Management');
                updateIconSidebar(e);
            },
            stateVariables: isContactManagement,
            subItems: [
                { id: 'contactCategory', label: 'Category', icon: '', link: '/contactCategory' },
                { id: 'contacts', label: 'Contacts', icon: '', link: '/contacts' }
            ]
        },
        {
            id: 'ticket-management',
            label: 'Ticket Management',
            icon: 'mdi mdi-ticket',
            link: '/#',
            click: function (e) {
                e.preventDefault();
                setIsTicketManagement(!isTicketManagement);
                setIscurrentState('Ticket Management');
                updateIconSidebar(e);
            },
            stateVariables: isTicketManagement,
            subItems: [
                { id: 'ticketCategory', label: 'Category', icon: '', link: '/ticketCategory' },
                { id: 'tickets', label: 'Tickets', icon: '', link: '/tickets' }
            ]
        }
    ];
    return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;