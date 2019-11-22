module.exports = {
  plugins: [
    {
      resolve: "@matthieuauger/gatsby-theme-meetup",
      options: {
        meetupName: "CSS Paris",
        meetupHomepageHeadline: "Bienvenue sur le meetup CSS Paris !",
        meetupDotComGroupUrlName: "CSS-Paris",
        displayVideosLink: false,
        talkProposalUrl: "#",
        dateFormat: `DD/MM/YYYY`,
        textBlocksPath: `${__dirname}/src/text-blocks`,
        translations: {
          PROPOSE_A_TALK: "Proposer un talk →",
          FETCH_VIDEOS: "See videos →",
          LAST_MEETUPS: "Derniers meetups",
          REGISTER_ON_MEETUP: "Register on Meetup →"
        },
        currentMeetupColor: "#EFCC74",
        pastMeetupColors: ["white"]
      }
    }
  ]
};
