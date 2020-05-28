package com.codesquad.airbnb.application;

import com.codesquad.airbnb.domain.dto.GitHubOAuth;
import com.codesquad.airbnb.domain.dto.GitHubTokenRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Slf4j
@Service
@RequiredArgsConstructor
public class LoginService {

    private final GitHubOAuth gitHubOAuth;

    public void login(String code) {
        String accessToken = getAccessToken(code);
    }

    public String getAccessToken(String code) {
        return new RestTemplate().postForObject(gitHubOAuth.getAccessTokenUrl(), new GitHubTokenRequest(code, gitHubOAuth), String.class);
    }
    
    private void getUserEmail() {
        
    }
    
    private void makeCookie() {
        
    }
}
