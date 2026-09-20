import React, { createContext, useContext, useState, useCallback } from "react";

const translations = {
  en: {
    "nav.businesses": "Businesses",
    "nav.login": "Log in",
    "nav.register": "Register",
    "nav.home": "Home",
    "nav.payments": "Payments",
    "nav.activity": "Activity",
    "nav.myjcc": "My JCC",
    "nav.account": "Account",
    "lang.label": "EN",
    "search.placeholder": "Search for a business or service",
    "search.button": "Search",
    "trending.title": "Trending businesses",
    "trending.subtitle": "Most frequently used businesses during the last three months.",
    "simplify.title": "Simplifying your payments",
    "simplify.cta": "Create an account",
    "categories.title": "Categories",
    "registration.title": "Business registration",
    "registration.text": "Create a business profile on JCCsmart and start accepting online payments immediately",
    "registration.cta": "More info",
    "footer.poweredBy": "Powered by",
    "footer.contact": "Contact Us",
    "footer.about": "About us",
    "footer.terms": "Terms and Conditions",
    "footer.privacy": "Privacy statement",
    "footer.security": "Security Guidelines",
    "footer.copyright": "\u00a9 2026 JCC Payment Systems  Web design by BASE ELEMENT",
    "businesses.title": "Businesses",
    "businesses.all": "All categories",
    "businesses.searchPlaceholder": "Search businesses...",
    "businesses.results": "results",
    "businesses.pay": "Pay now",
    "businesses.empty": "No businesses match your search.",
    "login.title": "Log in to your account",
    "login.email": "Email",
    "login.password": "Password",
    "login.remember": "Remember me",
    "login.forgot": "Password recovery",
    "login.button": "Log in",
    "login.noAccount": "Don't have an account?",
    "login.createOne": "Register now",
    "register.title": "Create your account",
    "register.firstName": "First name",
    "register.lastName": "Last name",
    "register.email": "Email address",
    "register.phone": "Mobile phone",
    "register.password": "Password",
    "register.confirm": "Confirm password",
    "register.terms": "I agree to the Terms and Conditions",
    "register.button": "Create account",
    "register.haveAccount": "Already have an account?",
    "register.signIn": "Sign in",
    "toast.success": "Success",
    "toast.demo": "This is a frontend demo \u2014 data is mocked.",
    "pay.title": "Pay instantly",
    "pay.repayment": "Repayment",
    "pay.popular": "Popular businesses",
    "empty.noTransactions": "No transactions found",
    "empty.recentAppear": "Recent transactions will appear here",
    "cat.more": "More",
    "dash.welcome": "Welcome",
    "dash.addCard": "Add card",
    "dash.addAccount": "Add account",
    "dash.upcoming": "Upcoming bills",
    "dash.noReminders": "No payment reminders found!",
    "dash.add": "Add",
    "dash.recent": "Recent transactions",
    "dash.noRecent": "No transactions found!",
    "dash.recentSub": "Your recent transactions will appear here once you start paying with JCCsmart.",
    "dash.overview": "Overview",
    "dash.trackSpending": "Track spending",
    "dash.days30": "30 days",
    "dash.noSpending": "No spending data",
    "dash.noSpendingSub": "No transactions within the selected period",
    "banner.title": "Pay with Visa through Apple Pay or Google Pay on JCCsmart and win a smartphone worth up to \u20ac1,500",
    "banner.sub": "30 days, 30 winners.",
    "banner.terms": "See Terms & Conditions",
    "account.profile": "My Profile",
    "account.login": "Log in",
    "account.register": "Register",
    "account.logout": "Log out",
    "coming.title": "Coming soon",
    "coming.sub": "This section is under construction."
  },
  gr: {
    "nav.businesses": "\u0395\u03c0\u03b9\u03c7\u03b5\u03b9\u03c1\u03ae\u03c3\u03b5\u03b9\u03c2",
    "nav.login": "\u03a3\u03cd\u03bd\u03b4\u03b5\u03c3\u03b7",
    "nav.register": "\u0395\u03b3\u03b3\u03c1\u03b1\u03c6\u03ae",
    "nav.home": "\u0391\u03c1\u03c7\u03b9\u03ba\u03ae",
    "nav.payments": "\u03a0\u03bb\u03b7\u03c1\u03c9\u03bc\u03ae",
    "nav.activity": "\u0394\u03c1\u03b1\u03c3\u03c4\u03b7\u03c1\u03b9\u03cc\u03c4\u03b7\u03c4\u03b1",
    "nav.myjcc": "My JCC",
    "nav.account": "\u039b\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03cc\u03c2",
    "lang.label": "\u0395\u039b",
    "search.placeholder": "\u0391\u03bd\u03b1\u03b6\u03ae\u03c4\u03b7\u03c3\u03b7 \u03b5\u03c0\u03b9\u03c7\u03b5\u03af\u03c1\u03b7\u03c3\u03b7\u03c2 \u03ae \u03c5\u03c0\u03b7\u03c1\u03b5\u03c3\u03af\u03b1\u03c2",
    "search.button": "\u0391\u03bd\u03b1\u03b6\u03ae\u03c4\u03b7\u03c3\u03b7",
    "trending.title": "\u0394\u03b7\u03bc\u03bf\u03c6\u03b9\u03bb\u03b5\u03af\u03c2 \u03b5\u03c0\u03b9\u03c7\u03b5\u03b9\u03c1\u03ae\u03c3\u03b5\u03b9\u03c2",
    "trending.subtitle": "\u039f\u03b9 \u03c0\u03b9\u03bf \u03c3\u03c5\u03c7\u03bd\u03ac \u03c7\u03c1\u03b7\u03c3\u03b9\u03bc\u03bf\u03c0\u03bf\u03b9\u03bf\u03cd\u03bc\u03b5\u03bd\u03b5\u03c2 \u03b5\u03c0\u03b9\u03c7\u03b5\u03b9\u03c1\u03ae\u03c3\u03b5\u03b9\u03c2 \u03c4\u03bf\u03c5\u03c2 \u03c4\u03b5\u03bb\u03b5\u03c5\u03c4\u03b1\u03af\u03bf\u03c5\u03c2 \u03c4\u03c1\u03b5\u03b9\u03c2 \u03bc\u03ae\u03bd\u03b5\u03c2.",
    "simplify.title": "\u0391\u03c0\u03bb\u03bf\u03c0\u03bf\u03b9\u03bf\u03cd\u03bc\u03b5 \u03c4\u03b9\u03c2 \u03c0\u03bb\u03b7\u03c1\u03c9\u03bc\u03ad\u03c2 \u03c3\u03bf\u03c5",
    "simplify.cta": "\u0394\u03b7\u03bc\u03b9\u03bf\u03c5\u03c1\u03b3\u03af\u03b1 \u03bb\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03bf\u03cd",
    "categories.title": "\u039a\u03b1\u03c4\u03b7\u03b3\u03bf\u03c1\u03af\u03b5\u03c2",
    "registration.title": "\u0395\u03b3\u03b3\u03c1\u03b1\u03c6\u03ae \u03b5\u03c0\u03b9\u03c7\u03b5\u03af\u03c1\u03b7\u03c3\u03b7\u03c2",
    "registration.text": "\u0394\u03b7\u03bc\u03b9\u03bf\u03cd\u03c1\u03b3\u03b7\u03c3\u03b5 \u03ad\u03bd\u03b1 \u03b5\u03c0\u03b9\u03c7\u03b5\u03b9\u03c1\u03b7\u03bc\u03b1\u03c4\u03b9\u03ba\u03cc \u03c0\u03c1\u03bf\u03c6\u03af\u03bb \u03c3\u03c4\u03bf JCCsmart \u03ba\u03b1\u03b9 \u03be\u03b5\u03ba\u03af\u03bd\u03b7\u03c3\u03b5 \u03bd\u03b1 \u03b4\u03ad\u03c7\u03b5\u03c3\u03b1\u03b9 \u03c0\u03bb\u03b7\u03c1\u03c9\u03bc\u03ad\u03c2 \u03ac\u03bc\u03b5\u03c3\u03b1",
    "registration.cta": "\u03a0\u03b5\u03c1\u03b9\u03c3\u03c3\u03cc\u03c4\u03b5\u03c1\u03b1",
    "footer.poweredBy": "Powered by",
    "footer.contact": "\u0395\u03c0\u03b9\u03ba\u03bf\u03b9\u03bd\u03c9\u03bd\u03af\u03b1",
    "footer.about": "\u03a3\u03c7\u03b5\u03c4\u03b9\u03ba\u03ac \u03bc\u03b5 \u03b5\u03bc\u03ac\u03c2",
    "footer.terms": "\u038c\u03c1\u03bf\u03b9 \u03ba\u03b1\u03b9 \u03a0\u03c1\u03bf\u03cb\u03c0\u03bf\u03b8\u03ad\u03c3\u03b5\u03b9\u03c2",
    "footer.privacy": "\u0394\u03ae\u03bb\u03c9\u03c3\u03b7 \u0391\u03c0\u03bf\u03c1\u03c1\u03ae\u03c4\u03bf\u03c5",
    "footer.security": "\u039f\u03b4\u03b7\u03b3\u03af\u03b5\u03c2 \u0391\u03c3\u03c6\u03b1\u03bb\u03b5\u03af\u03b1\u03c2",
    "footer.copyright": "\u00a9 2026 JCC Payment Systems  Web design by BASE ELEMENT",
    "businesses.title": "\u0395\u03c0\u03b9\u03c7\u03b5\u03b9\u03c1\u03ae\u03c3\u03b5\u03b9\u03c2",
    "businesses.all": "\u038c\u03bb\u03b5\u03c2 \u03bf\u03b9 \u03ba\u03b1\u03c4\u03b7\u03b3\u03bf\u03c1\u03af\u03b5\u03c2",
    "businesses.searchPlaceholder": "\u0391\u03bd\u03b1\u03b6\u03ae\u03c4\u03b7\u03c3\u03b7 \u03b5\u03c0\u03b9\u03c7\u03b5\u03b9\u03c1\u03ae\u03c3\u03b5\u03c9\u03bd...",
    "businesses.results": "\u03b1\u03c0\u03bf\u03c4\u03b5\u03bb\u03ad\u03c3\u03bc\u03b1\u03c4\u03b1",
    "businesses.pay": "\u03a0\u03bb\u03b7\u03c1\u03c9\u03bc\u03ae",
    "businesses.empty": "\u0394\u03b5\u03bd \u03b2\u03c1\u03ad\u03b8\u03b7\u03ba\u03b1\u03bd \u03b5\u03c0\u03b9\u03c7\u03b5\u03b9\u03c1\u03ae\u03c3\u03b5\u03b9\u03c2.",
    "login.title": "\u03a3\u03c5\u03bd\u03b4\u03ad\u03c3\u03bf\u03c5 \u03c3\u03c4\u03bf\u03bd \u03bb\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03cc \u03c3\u03bf\u03c5",
    "login.email": "Email",
    "login.password": "\u039a\u03c9\u03b4\u03b9\u03ba\u03cc\u03c2 \u03c0\u03c1\u03cc\u03c3\u03b2\u03b1\u03c3\u03b7\u03c2",
    "login.remember": "\u039d\u03b1 \u03bc\u03b5 \u03b8\u03c5\u03bc\u03ac\u03c3\u03b1\u03b9",
    "login.forgot": "\u0391\u03bd\u03ac\u03ba\u03c4\u03b7\u03c3\u03b7 \u03ba\u03c9\u03b4\u03b9\u03ba\u03bf\u03cd",
    "login.button": "\u03a3\u03cd\u03bd\u03b4\u03b5\u03c3\u03b7",
    "login.noAccount": "\u0394\u03b5\u03bd \u03ad\u03c7\u03b5\u03b9\u03c2 \u03bb\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03cc;",
    "login.createOne": "\u039a\u03ac\u03bd\u03b5 \u03b5\u03b3\u03b3\u03c1\u03b1\u03c6\u03ae \u03c4\u03ce\u03c1\u03b1",
    "register.title": "\u0394\u03b7\u03bc\u03b9\u03bf\u03c5\u03c1\u03b3\u03af\u03b1 \u03bb\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03bf\u03cd",
    "register.firstName": "\u038c\u03bd\u03bf\u03bc\u03b1",
    "register.lastName": "\u0395\u03c0\u03ce\u03bd\u03c5\u03bc\u03bf",
    "register.email": "\u0394\u03b9\u03b5\u03cd\u03b8\u03c5\u03bd\u03c3\u03b7 email",
    "register.phone": "\u039a\u03b9\u03bd\u03b7\u03c4\u03cc \u03c4\u03b7\u03bb\u03ad\u03c6\u03c9\u03bd\u03bf",
    "register.password": "\u039a\u03c9\u03b4\u03b9\u03ba\u03cc\u03c2",
    "register.confirm": "\u0395\u03c0\u03b9\u03b2\u03b5\u03b2\u03b1\u03af\u03c9\u03c3\u03b7 \u03ba\u03c9\u03b4\u03b9\u03ba\u03bf\u03cd",
    "register.terms": "\u0391\u03c0\u03bf\u03b4\u03ad\u03c7\u03bf\u03bc\u03b1\u03b9 \u03c4\u03bf\u03c5\u03c2 \u038c\u03c1\u03bf\u03c5\u03c2 \u03ba\u03b1\u03b9 \u03a0\u03c1\u03bf\u03cb\u03c0\u03bf\u03b8\u03ad\u03c3\u03b5\u03b9\u03c2",
    "register.button": "\u0394\u03b7\u03bc\u03b9\u03bf\u03c5\u03c1\u03b3\u03af\u03b1 \u03bb\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03bf\u03cd",
    "register.haveAccount": "\u0388\u03c7\u03b5\u03b9\u03c2 \u03ae\u03b4\u03b7 \u03bb\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03cc;",
    "register.signIn": "\u03a3\u03cd\u03bd\u03b4\u03b5\u03c3\u03b7",
    "toast.success": "\u0395\u03c0\u03b9\u03c4\u03c5\u03c7\u03af\u03b1",
    "toast.demo": "\u0394\u03b7\u03bc\u03bf\u03bd\u03c3\u03c4\u03c1\u03b1\u03c4\u03b9\u03ba\u03cc frontend \u2014 \u03c4\u03b1 \u03b4\u03b5\u03b4\u03bf\u03bc\u03ad\u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03b5\u03b9\u03ba\u03bf\u03bd\u03b9\u03ba\u03ac."
    ,
    "pay.title": "\u03a0\u03bb\u03ae\u03c1\u03c9\u03c3\u03b5 \u03c3\u03c4\u03b7 \u03c3\u03c4\u03b9\u03b3\u03bc\u03ae",
    "pay.repayment": "\u0395\u03c0\u03b1\u03bd\u03b1\u03c0\u03bb\u03b7\u03c1\u03c9\u03bc\u03ae",
    "pay.popular": "\u0394\u03b7\u03bc\u03bf\u03c6\u03b9\u03bb\u03b5\u03af\u03c2 \u03b5\u03c0\u03b9\u03c7\u03b5\u03b9\u03c1\u03ae\u03c3\u03b5\u03b9\u03c2",
    "empty.noTransactions": "\u0394\u03b5\u03bd \u03b2\u03c1\u03ad\u03b8\u03b7\u03ba\u03b1\u03bd \u03c3\u03c5\u03bd\u03b1\u03bb\u03bb\u03b1\u03b3\u03ad\u03c2",
    "empty.recentAppear": "\u03a0\u03c1\u03cc\u03c3\u03c6\u03b1\u03c4\u03b5\u03c2 \u03c3\u03c5\u03bd\u03b1\u03bb\u03bb\u03b1\u03b3\u03ad\u03c2 \u03b8\u03b1 \u03b5\u03bc\u03c6\u03b1\u03bd\u03af\u03b6\u03bf\u03bd\u03c4\u03b1\u03b9 \u03b5\u03b4\u03ce",
    "cat.more": "\u03a0\u03b5\u03c1\u03b9\u03c3\u03c3\u03cc\u03c4\u03b5\u03c1\u03b1",
    "dash.welcome": "\u039a\u03b1\u03bb\u03c9\u03c3\u03cc\u03c1\u03b9\u03c3\u03b5\u03c2",
    "dash.addCard": "\u03a0\u03c1\u03bf\u03c3\u03b8\u03ae\u03ba\u03b7 \u03ba\u03ac\u03c1\u03c4\u03b1\u03c2",
    "dash.addAccount": "\u03a0\u03c1\u03bf\u03c3\u03b8\u03ae\u03ba\u03b7 \u03bb\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03bf\u03cd",
    "dash.upcoming": "\u03a0\u03c1\u03bf\u03c3\u03b5\u03c7\u03b5\u03af\u03c2 \u03bb\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03bf\u03af",
    "dash.noReminders": "\u0394\u03b5\u03bd \u03b2\u03c1\u03ad\u03b8\u03b7\u03ba\u03b1\u03bd \u03c5\u03c0\u03b5\u03bd\u03b8\u03c5\u03bc\u03af\u03c3\u03b5\u03b9\u03c2 \u03c0\u03bb\u03b7\u03c1\u03c9\u03bc\u03ce\u03bd!",
    "dash.add": "\u03a0\u03c1\u03bf\u03c3\u03b8\u03ae\u03ba\u03b7",
    "dash.recent": "\u03a0\u03c1\u03cc\u03c3\u03c6\u03b1\u03c4\u03b5\u03c2 \u03c3\u03c5\u03bd\u03b1\u03bb\u03bb\u03b1\u03b3\u03ad\u03c2",
    "dash.noRecent": "\u0394\u03b5\u03bd \u03b2\u03c1\u03ad\u03b8\u03b7\u03ba\u03b1\u03bd \u03c3\u03c5\u03bd\u03b1\u03bb\u03bb\u03b1\u03b3\u03ad\u03c2!",
    "dash.recentSub": "\u039f\u03b9 \u03c0\u03c1\u03cc\u03c3\u03c6\u03b1\u03c4\u03b5\u03c2 \u03c3\u03c5\u03bd\u03b1\u03bb\u03bb\u03b1\u03b3\u03ad\u03c2 \u03c3\u03b1\u03c2 \u03b8\u03b1 \u03b5\u03bc\u03c6\u03b1\u03bd\u03b9\u03c3\u03c4\u03bf\u03cd\u03bd \u03b5\u03b4\u03ce \u03bc\u03cc\u03bb\u03b9\u03c2 \u03b1\u03c1\u03c7\u03af\u03c3\u03b5\u03c4\u03b5 \u03bd\u03b1 \u03c0\u03bb\u03b7\u03c1\u03ce\u03bd\u03b5\u03c4\u03b5 \u03bc\u03b5 \u03c4\u03bf JCC smart.",
    "dash.overview": "\u0395\u03c0\u03b9\u03c3\u03ba\u03cc\u03c0\u03b7\u03c3\u03b7",
    "dash.trackSpending": "\u03a0\u03b1\u03c1\u03b1\u03ba\u03bf\u03bb\u03bf\u03cd\u03b8\u03b7\u03c3\u03b7 \u03b4\u03b1\u03c0\u03b1\u03bd\u03ce\u03bd",
    "dash.days30": "30 \u03b7\u03bc\u03ad\u03c1\u03b5\u03c2",
    "dash.noSpending": "\u0394\u03b5\u03bd \u03c5\u03c0\u03ac\u03c1\u03c7\u03bf\u03c5\u03bd \u03c3\u03c4\u03bf\u03b9\u03c7\u03b5\u03af\u03b1 \u03b4\u03b1\u03c0\u03b1\u03bd\u03ce\u03bd",
    "dash.noSpendingSub": "\u0394\u03b5\u03bd \u03b2\u03c1\u03ad\u03b8\u03b7\u03ba\u03b1\u03bd \u03c3\u03c5\u03bd\u03b1\u03bb\u03bb\u03b1\u03b3\u03ad\u03c2 \u03b5\u03bd\u03c4\u03cc\u03c2 \u03c4\u03b7\u03c2 \u03b5\u03c0\u03b9\u03bb\u03b5\u03b3\u03bc\u03ad\u03bd\u03b7\u03c2 \u03c0\u03b5\u03c1\u03b9\u03cc\u03b4\u03bf\u03c5",
    "banner.title": "\u03a0\u03bb\u03ae\u03c1\u03c9\u03c3\u03b5 \u03bc\u03b5 Visa \u03bc\u03ad\u03c3\u03c9 Apple Pay \u03ae Google Pay \u03c3\u03c4\u03bf JCCsmart \u03ba\u03b1\u03b9 \u03ba\u03ad\u03c1\u03b4\u03b9\u03c3\u03b5 smartphone \u03b1\u03be\u03af\u03b1\u03c2 \u03ad\u03c9\u03c2 \u20ac1.500",
    "banner.sub": "30 \u03b7\u03bc\u03ad\u03c1\u03b5\u03c2, 30 \u03bd\u03b9\u03ba\u03b7\u03c4\u03ad\u03c2.",
    "banner.terms": "\u0394\u03b5\u03c2 \u038c\u03c1\u03bf\u03c5\u03c2 & \u03a0\u03c1\u03bf\u03cb\u03c0\u03bf\u03b8\u03ad\u03c3\u03b5\u03b9\u03c2",
    "account.profile": "\u03a4\u03bf \u03c0\u03c1\u03bf\u03c6\u03af\u03bb \u03bc\u03bf\u03c5",
    "account.login": "\u03a3\u03cd\u03bd\u03b4\u03b5\u03c3\u03b7",
    "account.register": "\u0395\u03b3\u03b3\u03c1\u03b1\u03c6\u03ae",
    "account.logout": "\u0391\u03c0\u03bf\u03c3\u03cd\u03bd\u03b4\u03b5\u03c3\u03b7",
    "coming.title": "\u03a3\u03cd\u03bd\u03c4\u03bf\u03bc\u03b1 \u03ba\u03bf\u03bd\u03c4\u03ac \u03c3\u03b1\u03c2",
    "coming.sub": "\u0391\u03c5\u03c4\u03ae \u03b7 \u03b5\u03bd\u03cc\u03c4\u03b7\u03c4\u03b1 \u03b2\u03c1\u03af\u03c3\u03ba\u03b5\u03c4\u03b1\u03b9 \u03c5\u03c0\u03cc \u03ba\u03b1\u03c4\u03b1\u03c3\u03ba\u03b5\u03c5\u03ae."
  }
};

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => localStorage.getItem("jcc_lang") || "en");

  const toggleLang = useCallback(() => {
    setLang((prev) => {
      const next = prev === "en" ? "gr" : "en";
      localStorage.setItem("jcc_lang", next);
      return next;
    });
  }, []);

  const t = useCallback((key) => translations[lang]?.[key] ?? key, [lang]);

  // helper to read {en, gr} objects from data
  const tr = useCallback((obj) => (obj ? obj[lang] ?? obj.en : ""), [lang]);

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t, tr }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
};
