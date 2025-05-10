export const ApplicationConfig = {
  layout: {
    headerMenu: {
      items: [
        {
          title: 'Home',
          href: '/'
        },
        {
          title: 'Contact',
          href: '/home'
        },
        {
          title: 'About',
          href: '/home'
        },
        {
          title: 'Sign Up',
          href: '/auth/registration'
        },
      ]
    },
    footerMenu: {
      groups: {
        support: {
          title: 'Support',
          items: [
            { title: '111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.' },
            { title: 'exclusive@gmail.com' },
            { title: '+88015-88888-9999' },
          ]
        },
        account: {
          title: 'Account',
          items: [
            { title: 'My Account', href: '/account' },
            { title: 'Login / Register', href: '/auth/login' },
            { title: 'Cart', href: '/account' },
            { title: 'Wishlist', href: '/account' },
            { title: 'Shop', href: '/account' },
          ]
        },
        quickLink: {
          title: 'Quick Link',
          items: [
            { title: 'Privacy Policy', href: '/account' },
            { title: 'Terms Of Use', href: '/account' },
            { title: 'FAQ', href: '/account' },
            { title: 'Contact', href: '/account' },
          ]
        }
      }
    }
  }
}
