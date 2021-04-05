package com.hf.eclub.models;
import lombok.Data;

import javax.persistence.*;


@Data
@Entity
@Table(name = "question")

public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  Long id;

    @Column(name = "survey_id")
    private Long surveyId;

    @Column(name="question")

    private String ques;

    @Column(name="clubname")

    private String clubName;

}