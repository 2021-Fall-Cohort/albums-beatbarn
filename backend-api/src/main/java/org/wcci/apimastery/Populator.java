package org.wcci.apimastery;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.wcci.apimastery.models.Album;
import org.wcci.apimastery.models.Song;
import org.wcci.apimastery.repository.AlbumRepository;
import org.wcci.apimastery.repository.SongRepository;

@Component
public class Populator implements CommandLineRunner {
    private AlbumRepository albumRepo;
    private SongRepository songRepo;

    public Populator(AlbumRepository albumRepo, SongRepository songRepo) {
        this.albumRepo = albumRepo;
        this.songRepo = songRepo;
    }
    @Override
    public void run(String... args) throws Exception{
        Album album1 = new Album("Blue Record","/resources/blueRecord.jpg",5f,"Relapse Records","Baroness");
        albumRepo.save(album1);
        Album album2 = new Album("Dark as Night", "/resources/nahko.jpg", 5f, "Ten to Two Records", "Nahko and Medicine for the People");
        albumRepo.save(album2);
        Album album3 = new Album("Perfect Enemy", "/resources/tilian.jpg", 5f, "Vital Records", "Tilian");
        albumRepo.save(album3);
        Album album4 = new Album("Dopesmoker", "/resources/sleep.jpeg", 5f, "TeePee Records", "Sleep");
        albumRepo.save(album4);
        Album album5 = new Album("Locket", "/resources/locket.jpg", 5f, "Phoenix Down Recording", "Crumb");
        albumRepo.save(album5);
        Album album6 = new Album("Murder of the Universe", "/resources/kgatlw.jpg", 4f, "Flightless Records", "King Gizzard & the Lizard Wizard");
        albumRepo.save(album6);
        Album album7 = new Album("Head Rock", "/resources/jiro.jpg", 5f, "Columbia", "Jiro Inagaki & Soul Media");
        albumRepo.save(album7);

        Song BRsong1 = new Song("Bullhead's Psalm", "https://www.youtube.com/embed/3tT0Rr19Kds", 1.20f, 4f, album1, "Baroness");
        songRepo.save(BRsong1);
        Song BRsong2 = new Song("The Sweetest Curse", "https://www.youtube-nocookie.com/embed/WQj6F12hRJ8", 4.30f, 4.5f, album1, "Baroness");
        songRepo.save(BRsong2);
        Song BRsong3 = new Song("Jake Leg", "https://www.youtube-nocookie.com/embed/7jl8CbUpDK0", 4.34f, 5f, album1, "Baroness");
        songRepo.save(BRsong3);
        Song BRsong4 = new Song("Steel That Sleeps the Eye", "https://www.youtube-nocookie.com/embed/7tYricYeI9w", 2.38f, 5f, album1, "Baroness");
        songRepo.save(BRsong4);
        Song BRsong5 = new Song("Swollen and Halo","https://www.youtube-nocookie.com/embed/pHx6Y-18sRg",6.35f,5f,album1,"Baroness");
        songRepo.save(BRsong5);
        Song BRsong6 = new Song("Ogeechee Hymnal", "https://www.youtube-nocookie.com/embed/BvmL-O5Y48I", 2.35f, 3.5f, album1, "Baroness");
        songRepo.save(BRsong6);
        Song BRsong7 = new Song("A Horse Called Golgotha","https://www.youtube-nocookie.com/embed/2eH13VblQfI",5.21f,4f,album1,"Baroness");
        songRepo.save(BRsong7);
        Song BRsong8 = new Song("O'er Hell and Hide", "https://www.youtube-nocookie.com/embed/8j1lEW00nZM", 4.22f, 4.5f, album1, "Baroness");
        songRepo.save(BRsong8);
        Song BRsong9 = new Song("War, Wisdom and Rhyme", "https://www.youtube-nocookie.com/embed/gLcolunIsBs", 4.25f, 3.5f, album1, "Baroness");
        songRepo.save(BRsong9);
        Song BRsong10 = new Song("Blackpowder Orchard", "https://www.youtube-nocookie.com/embed/Yq2M4cef67c", 1.00f, 4.5f, album1,  "Baroness");
        songRepo.save(BRsong9);
        Song BRsong11 = new Song("The Gnashing", "https://www.youtube-nocookie.com/embed/cNVRfXIFr7Q", 4.17f, 5f, album1, "Baroness");
        songRepo.save(BRsong11);
        Song BRsong12 = new Song("Bullhead's Lament", "https://www.youtube-nocookie.com/embed/zsyB4kKi4Xs", 2.59f, 5f, album1, "Baroness");
        songRepo.save(BRsong12);

                                                                                                                //Nahko and Medicine for the People
        Song DANsong1 = new Song("Aloha Ke Akua", "https://open.spotify.com/embed/track/0pv9Mg8pV2mT3gffu2QZkM?utm_source=generator", 5.56f, 5f, album2, "Nahko and Medicine for the People");
        songRepo.save(DANsong1);
        Song DANsong2 = new Song("Manifesto II", "https://open.spotify.com/embed/track/0IsDvY2eXqASI0wrL8MnVq?utm_source=generator", 5.24f, 5f, album2, "Nahko and Medicine for the People");
        songRepo.save(DANsong2);
        Song DANsong3 = new Song("Risk It", "https://open.spotify.com/embed/track/1lLU650ShMor2b7NuUmmCh?utm_source=generator", 5.11f, 5f, album2, "Nahko and Medicine for the People");
        songRepo.save(DANsong3);
        Song DANsong4 = new Song("Warrior People", "https://open.spotify.com/embed/track/3t0iitdgsbsBA8JDvEPzCB?utm_source=generator", 4.57f, 5f, album2,  "Nahko and Medicine for the People");
        songRepo.save(DANsong4);
        Song DANsong5 = new Song("So Thankful", "https://open.spotify.com/embed/track/5EF4PS7GwtroPK938QMd62?utm_source=generator", 4.22f, 5f, album2, "Nahko and Medicine for the People");
        songRepo.save(DANsong5);
        Song DANsong6 = new Song("Budding Trees", "https://open.spotify.com/embed/track/3E3I7DBGCIsIgT1a1UJEFK?utm_source=generator", 6.24f, 5f, album2, "Nahko and Medicine for the People");
        songRepo.save(DANsong6);
        Song DANsong7 = new Song("Nyepi", "https://open.spotify.com/embed/track/7q0T1aiIqFutngin7DxdcE?utm_source=generator", 5.40f, 5f, album2, "Nahko and Medicine for the People");
        songRepo.save(DANsong7);
        Song DANsong8 = new Song("7 Feathers", "https://open.spotify.com/embed/track/0U1cae4gRaUY1letpW1p2o?utm_source=generator", 4.31f, 5f, album2, "Nahko and Medicine for the People");
        songRepo.save(DANsong8);
        Song DANsong9 = new Song("Black As Night", "https://open.spotify.com/embed/track/7i3XZnT9EZu1m4NUYMuAoG?utm_source=generator", 7.14f, 5f, album2, "Nahko and Medicine for the People");
        songRepo.save(DANsong9);
        Song DANsong10 = new Song("On the Verge", "https://open.spotify.com/embed/track/0WljZJ4f7OZEHYCKlpJ3JM?utm_source=generator", 4.26f, 5f, album2, "Nahko and Medicine for the People");
        songRepo.save(DANsong10);
        Song DANsong11 = new Song("My Country", "https://open.spotify.com/embed/track/1KIqJBH0FfrZtTH6oJkNOQ?utm_source=generator", 3.23f, 5f, album2, "Nahko and Medicine for the People");
        songRepo.save(DANsong11);
        Song DANsong12 = new Song("I Mua", "https://open.spotify.com/embed/track/1IgJAV87SFpZdvtWOirwuY?utm_source=generator", 5.29f, 5f, album2, "Nahko and Medicine for the People");
        songRepo.save(DANsong12);

        Song PEsong1 = new Song("True", "https://www.youtube-nocookie.com/embed/3zIGYXiDhio", 3.27f, 5f, album3, "Tilian");
        songRepo.save(PEsong1);
        Song PEsong2 = new Song("Didn't I Get the Message", "https://www.youtube-nocookie.com/embed/NkJs3EghBT4", 3.02f, 5f, album3, "Tilian" );
        songRepo.save(PEsong2);
        Song PEsong3 = new Song("Satellite", "https://www.youtube.com/embed/ZGqYVTMbnl4", 3.22f, 5f, album3, "Tilian");
        songRepo.save(PEsong3);
        Song PEsong4 = new Song("Tug of War", "https://www.youtube-nocookie.com/embed/qi9S0lyKxKQ", 3.05f, 5f, album3, "Tilian");
        songRepo.save(PEsong4);
        Song PEsong5 = new Song("Stranger", "https://open.spotify.com/embed/track/526tib3xudzp9O9tFcayr5?utm_source=generator", 2.50f, 5f, album3, "Tilian");
        songRepo.save(PEsong5);
        Song PEsong6 = new Song("Drift", "https://www.youtube-nocookie.com/embed/6wEp3MpE11k", 3.55f, 5f, album3, "Tilian");
        songRepo.save(PEsong6);
        Song PEsong7 = new Song("HeartFelt", "https://www.youtube-nocookie.com/embed/6epEmR8Vnic", 3.38f, 5f, album3, "Tilian");
        songRepo.save(PEsong7);
        Song PEsong8 = new Song("Hold Me Down", "https://open.spotify.com/embed/track/46jXt9pm1mxHbnwq1NaJ7j?utm_source=generator", 2.43f, 5f, album3, "Tilian");
        songRepo.save(PEsong8);
        Song PEsong9 = new Song("Alive", "https://www.youtube-nocookie.com/embed/Gc6A_DId0gc", 4.18f, 5f, album3, "Tilian");
        songRepo.save(PEsong9);
        Song PEsong10 = new Song("All I ever do", "https://www.youtube-nocookie.com/embed/naJBgMowweg", 3.13f, 5f, album3, "Tilian");
        songRepo.save(PEsong10);
        Song PEsong11 = new Song("Future Friends", "https://www.youtube-nocookie.com/embed/HM0LFMc5QI0", 3.59f, 5f, album3, "Tilian");
        songRepo.save(PEsong11);
        Song PEsong12 = new Song("Dreaming", "https://www.youtube-nocookie.com/embed/OG3YWmhPq7g", 3.53f, 5f, album3, "Tilian");
        songRepo.save(PEsong12);

        Song DSsong1 = new Song("Dopesmoker", "https://open.spotify.com/embed/track/1vhvheW4R0KbK6Kr3NFplW?utm_source=generator&theme=0", 63.36f, 5f, album4, "Sleep");
        songRepo.save(DSsong1);


        Song Lsong1 = new Song("Plants", "https://www.youtube-nocookie.com/embed/ajyBZVSNCiI", 3.11f, 4f, album5, "Crumb");
        songRepo.save(Lsong1);
        Song Lsong2 = new Song("Recently Played", "https://www.youtube-nocookie.com/embed/77W8byh7144", 2.00f, 4.5f, album5, "Crumb");
        songRepo.save(Lsong2);
        Song Lsong3 = new Song("Thirty-Nine", "https://www.youtube-nocookie.com/embed/5PqAgeA1ZK0", 4.39f, 5f, album5, "Crumb");
        songRepo.save(Lsong3);
        Song Lsong4 = new Song("Locket", "https://www.youtube-nocookie.com/embed/BqnG_Ei35JE", 5.18f, 5f, album5, "Crumb");
        songRepo.save(Lsong4);

        Song MUsong1 = new Song("Alter Me/Altered Beast I-IV", "https://www.youtube-nocookie.com/embed/ZBuWFn5gFE4", 15.23f, 5f, album6, "King Gizzard & the Lizard Wizard");
        songRepo.save(MUsong1);
        Song MUsong2 = new Song("The Lord of Lightning vs The Balrog", "https://www.youtube-nocookie.com/embed/Rd3vwwXArMQ", 13.55f, 4f, album6, "King Gizzard & the Lizard Wizard");
        songRepo.save(MUsong2);
        Song MUsong3 = new Song("Han-Tyumi and the Murder of the Universe", "https://open.spotify.com/embed/track/0ygAoz3haF1jLcHHB7NWf4?utm_source=generator", 13.02f, 4.5f, album6, "King Gizzard & the Lizard Wizard");
        songRepo.save(MUsong3);

        Song HRsong1 = new Song("The Vamp", "https://open.spotify.com/embed/track/6MiG0cAVNZ9MR2iqsw9dVj?utm_source=generator", 5.22f, 4f, album7, "Jiro Inagaki & Soul Media");
        songRepo.save(HRsong1);
        Song HRsong2 = new Song("Twenty-One", "https://open.spotify.com/embed/track/3IgkCNDyHdMIGJMVtfzNIu?utm_source=generator", 5.33f, 4f, album7, "Jiro Inagaki & Soul Media");
        songRepo.save(HRsong2);
        Song HRsong3 = new Song("Spoonful", "https://open.spotify.com/embed/track/6gOUSx3tyUzQEsh16TsnaX?utm_source=generator", 9.18f, 4f, album7, "Jiro Inagaki & Soul Media");
        songRepo.save(HRsong3);
        Song HRsong4 = new Song("Back to Rack", "https://open.spotify.com/embed/track/2WLNfOFWW7xt8TpD6IAIRD?utm_source=generator", 3.35f, 5f, album7, "Jiro Inagaki & Soul Media");
        songRepo.save(HRsong4);
        Song HRsong5 = new Song("High Jack", "https://open.spotify.com/embed/track/1EoQjX52kziNxbFEQZNh76?utm_source=generator", 4.15f, 5f, album7, "Jiro Inagaki & Soul Media");
        songRepo.save(HRsong5);
        Song HRsong6 = new Song("The Ground For Peace", "https://open.spotify.com/embed/track/3KIK3kTKcjSkD9JaUreOCl?utm_source=generator", 7.43f, 4.5f, album7, "Jiro Inagaki & Soul Media");
        songRepo.save(HRsong6);
        Song HRsong7 = new Song("Head Rock", "https://open.spotify.com/embed/track/6Sa5Br6DV2vMSRrN8qmmqu?utm_source=generator", 4.20f, 3.5f, album7, "Jiro Inagaki & Soul Media");
        songRepo.save(HRsong7);
    }
}
