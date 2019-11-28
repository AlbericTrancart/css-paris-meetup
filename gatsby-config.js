module.exports = {
  plugins: [
    {
      resolve: "@matthieuauger/gatsby-theme-meetup",
      options: {
        meetupName: "CSS Paris",
        meetupHomepageHeadline: "Bienvenue sur le meetup CSS Paris !",
        meetupDotComGroupUrlName: "CSS-Paris",
        displayVideosLink: false,
        talkProposalUrl:
          "https://docs.google.com/forms/d/e/1FAIpQLSd9ZKtODhXzHKrE2z4AfwvmjI1EEA8LGTTQlOzoCYwUIZ36ww/viewform",
        dateFormat: `DD/MM/YYYY`,
        textBlocksPath: `${__dirname}/src/text-blocks`,
        translations: {
          PROPOSE_A_TALK: "Proposer un talk →",
          FETCH_VIDEOS: "See videos →",
          LAST_MEETUPS: "Derniers meetups",
          ALL_MEETUPS: "Tout les meetups →",
          REGISTER_ON_MEETUP: "Register on Meetup →"
        },
        currentMeetupColor: "#fbd0d7",
        pastMeetupColors: ["white", "#fde8eb"]
      }
    }
  ]
};
