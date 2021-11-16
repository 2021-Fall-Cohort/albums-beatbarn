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
    private Float numOfRatings;
    private Float avgRating;
    private String artist;
    @OneToMany(mappedBy = "album", cascade = CascadeType.ALL, orphanRemoval = true)
    private Collection<Song> songs;
    private String recordLabel;
    @ElementCollection
    private Collection<String> comments;

    public Album(String title, String imgUrl, Float numOfRatings, String artist, String recordLabel) {
        this.title = title;
        this.imgUrl = imgUrl;
        this.numOfRatings = numOfRatings;
        this.artist = artist;
        this.recordLabel = recordLabel;
        this.ratings = new ArrayList<>();
        this.comments = new ArrayList<>();
        this.songs = Arrays.asList();
        this.avgRating = avgRating;
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

    public float getNumOfRatings() {
        return numOfRatings;
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

    public void addComment(String comment){
        comments.add(comment);
    }


//    public Float getAvgRating() {
//        numOfRatings = ratings.size();
//        for(int i = 0, i<numOfRatings, i++){
//
//        }
//
//        return avgRating;
//    }




}
