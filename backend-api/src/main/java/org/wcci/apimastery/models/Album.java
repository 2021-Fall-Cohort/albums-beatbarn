package org.wcci.apimastery.models;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;

@Entity
public class Album {
    @Id
    @GeneratedValue
    private Long id;
    private String title;
    private String imgUrl;
    @ElementCollection
    private Collection<Float> ratings;
    private Float avgRating;
    private String artist;
    @OneToMany(mappedBy = "album", cascade = CascadeType.ALL, orphanRemoval = true)
    private Collection<Song> songs;
    private String recordLabel;
    @ElementCollection
    private Collection<String> comments;

    public Album(String title, String imgUrl, Float initialRating, String recordLabel, String artist) {
        this.title = title;
        this.imgUrl = imgUrl;
        this.artist = artist;
        this.recordLabel = recordLabel;
        this.ratings = new ArrayList<>();
        this.comments = new ArrayList<>();
        this.songs = Arrays.asList();
     /*   this.avgRating = initialRating;
        this.ratings.add(initialRating);*/
        addRating(initialRating);
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public Collection<Float> getRatings() {
        return ratings;
    }

    public Collection<Song> getSongs() {
        return songs;
    }

    public String getRecordLabel() {
        return recordLabel;
    }

    public Collection<String> getComments() {
        return comments;
    }

    public String getArtist() {
        return artist;
    }

    protected Album(){

    }

    public Float getAvgRating() {
        return avgRating;
    }

    public void addComment(String comment){
        comments.add(comment);
    }

    public void addRating(Float rating){
        rating = Math.min(5, rating);
        rating = Math.max(1, rating);
        ratings.add(rating);
        float total = 0;
        for (float currentRating: ratings) {
            total += currentRating;
        }
        avgRating = total/ratings.size();
    }
}
