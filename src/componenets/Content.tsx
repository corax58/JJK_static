import "../componenets/Content.css";
import OtherCard from "./OtherCard";
import anime_1 from "../assets/images/anime_1.png";
import anime_2 from "../assets/images/anime_2.png";
import anime_3 from "../assets/images/anime_3.jpg";

const Content = () => {
  const images = [
    {
      image: anime_1,
      title: "My Hero Academia",
      text: "My Hero Academia is a Japanese manga series written and illustrated by Kōhei Horikoshi. It has been serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump since July 2014.",
    },
    {
      image: anime_2,
      title: "One Piece",
      text: "One Piece is a Japanese manga series written and illustrated by Eiichiro Oda. It has been serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump since July 1997.",
    },
    {
      image: anime_3,
      title: "Naruto",
      text: "Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki.",
    },
  ];
  return (
    <div className="row text-align-center ">
      <div className="col-sm-1"></div>
      <div className="col-sm-8 content-container">
        <p className="text-wrap content-body">
          <h2>Setting</h2>
          <hr className="border border-danger border-2 opacity-10" />
          In Jujutsu Kaisen, all living beings emanate energy called Cursed
          Energy (呪力, Juryoku), which arises from negative emotions that
          naturally flow throughout the body. Ordinary people cannot control
          this flow in their bodies. As a result, they continually lose Cursed
          Energy, resulting in the birth of Curses (呪い, Noroi), a race of
          spiritual beings whose primary desire is to bring harm to humanity.
          These Curses are shown as gruesome monsters, ghosts, and yōkai.
        </p>
        <p className="text-wrap content-body">
          Jujutsu Sorcerers (呪術師, Jujutsushi, lit. "Cursed Technique Masters"
          or "Shamans") are people who control the flow of Cursed Energy in
          their bodies, allowing them to use it as they please and also to
          reduce its release. High-ranking Sorcerers and Curses can refine this
          energy and use it to perform Cursed Techniques (呪術式, Jujutsushiki),
          which tend to be unique to the user or their family. An advanced form
          of Cursed Technique is Domain Expansion (領域展開, Ryōiki Tenkai),
          which the users build a pocket dimension of variable size. Inside the
          domain, all of their attacks will always connect and grow in strength.
        </p>

        <p className="text-wrap content-body">
          <h2>Plot</h2>
          <hr className="border border-danger border-2 opacity-10" />
          Yuji Itadori is an unnaturally physically strong high school student
          living in Sendai. On his deathbed, his grandfather instils two
          powerful messages within Yuji: "always help others" and "die
          surrounded by people." Yuji's friends at the Occult Club attract
          Curses to their school when they unseal a rotten finger talisman. Yuji
          swallows the finger to protect Jujutsu Sorcerer Megumi Fushiguro,
          becoming host to a powerful Curse named Ryomen Sukuna.
        </p>
        <p className="text-wrap content-body">
          Due to Sukuna's evil nature, all sorcerers are required to exorcise
          him (and, by extension, Yuji) immediately. However upon seeing Yuji
          retaining control over his body, Megumi's teacher Satoru Gojo brings
          him to the Tokyo Prefectural Jujutsu High School with a proposal to
          his superiors: postpone Yuji's death sentence and train under Gojo
          until he consumes all 20 of Sukuna's fingers so the Curse can be
          eliminated. At the same time, a group of Cursed Spirits plot a
          multi-layered attack on the world of Jujutsu sorcery, including the
          Cursed Spirit Mahito and a corrupted sorcerer named Suguru Geto, who
          was executed by Gojo a year prior.
        </p>

        <p className="text-wrap content-body">
          <h2>Production</h2>
          <hr className="border border-danger border-2 opacity-10" />
          In 2017, Gege Akutami published Tokyo Metropolitan Curse Technical
          School, a 4-chapter series that ran in Jump Giga from April 28 to July
          28. This series would serve later as a prequel to Jujutsu Kaisen,
          being retroactively titled as Jujutsu Kaisen 0. According to Hiroyuki
          Nakano, the chief editor of Weekly Shōnen Jump, Jujutsu Kaisen
          received unanimous approval in the serialization committee. It debuted
          in Weekly Shōnen Jump on March 5, 2018.
        </p>
        <p className="text-wrap content-body">
          In October 2020, Akutami stated that the story's ending and main
          stages are planned, but that the path between the two remains "fairly
          free." In February 2021, Akutami stated that the series would probably
          be finished within two years, declaring, however, no confidence in
          that statement. Akutami knows how the story for Megumi Fushiguro will
          end, but not for Sukuna. On June 9, 2021, it was announced that the
          manga would enter on hiatus due to the author's health issues; it
          resumed publication on August 2 of the same year. In December 2022,
          Akutami hinted that the manga would end within a year, stating during
          the Jump Festa '23 event: "If you accompany me for up to one more year
          (probably), I will be very happy."
        </p>
      </div>
      <div className="col-sm-2 recommendation-card">
        {images.map((image) => (
          <OtherCard
            key={image.text}
            image={image.image}
            title={image.title}
            text={image.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Content;
