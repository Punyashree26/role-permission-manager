package com.internship.tool.service;

public interface EmailService {
    void sendSimpleMail(String to, String subject, String body);
    void sendHtmlMail(String to, String subject, String templateName, Object context);
}