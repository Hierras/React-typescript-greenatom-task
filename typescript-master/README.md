# TypeScript

Крупные приложения сложно писать на языках без статической типизации. Поэтому в мире веб-разработки появился и полюбился большинству разработчиков TypeScript. 

Пройдя этот блок, ты:
- узнаешь базовые принципы работы TS
- научишься писать на TS
- научишься использовать TS с React

Этот курс ориентирован в первую очередь на новичков в TypeScript. Не жди, что он раскроет все сокровенные тайны TS.

## Необходимые знания

Курс предполагает, что ты уже знаешь JavaScript ES2015+.

Для большей части курса знание React не нужно. Но курс описывает работу TS+React. Поэтому желательно знать React. Для этого можно пройти [курс](https://github.com/kontur-web-courses/react).

## Самостоятельное изучение

Вся информация из этого курса зафиксирована в этой [книге](https://race-timo.gitbook.io/typescript/).

## Презентация

[Ссылка на презентацию](https://kontur-web-courses.github.io/typescript/#/)


## Ссылки на задачи
В процессе курса в презентации будут ссылки на задачи. Чтобы не нужно было их искать по всей презентации, дублируем ссылки здесь:
- Простые типы
    - [Задание #1](https://www.typescriptlang.org/play?strictNullChecks=false&ts=4.1.3#code/PQKgsAUABDWMQgguEEAwgg2EEBwgghEEKwgVDsIIXhAlBxEC3zUHkQAGiiI0D4QQRhBBpECnx2cG4QOqOwCRA0GdBFAR1APCCB+EDQdygMRA0aSCGCQAxgHsAdgGcALlACGARgBcUTQFcAtgCMApgCcoAXjVa9hgExmb69QBs7A00XKDcdfQMAZjM9BwBLTQBzUPCPAwAWM0tbRwBtAF1UiA0IwwBWMwBBBwcDAE8AHjjEpIA+YtL0gDYzPJbkoucwkvdIgHY+3wCgzWoc+wchka7IgA4+hfyC6hq6poH25bTIowAGTetF6jytpZvbq8cdqDzH3KWCr+LIUEhYeDIdDYKAYNASJjUWiMFhsKCcbh8ARCETiKQyeSKCDKE5QGymGDDcZnADcuJs3kJUAAZgZ-No7GTRmUbDEqQAifx0gwAawM7KZqzxWSpeV0DgsdmotPpdgKgrGeN6ovO1HZ53Z8vJk1FADp9WKJXKtcyPDYNqK3vrdXlzl8XlaDeqzpr7ZBcaoABZ2VQ8nx+QLBUI2DJ5KIm37gaCwQB4IAxyIAmEEwOAkWEAAiBYMSkfBMHCqIwAWlUGSh9GYrHYTC4PH4gmEokk0jkCn+sATUEAsiD0MTwrgIHBoXtCHCAQRAoBI03QE+nkGIsTiIO7F8vQFBAIggffHk+nk+EC6FXp9PIA+gS7qF81AANRQcoKsqH33HzwXzy67QWGxxAAUZwAlPeHiPiebLTIGITDKoUR5GcJoHt6T4ZBe0FGEUN53h6CEnuUF4ZLqAAOFjaJ636ctyfLsgBQA)
    - [Задание #2](https://www.typescriptlang.org/play?strictNullChecks=false#code/PQKgsAUABDWOgggGEECwgDBCIIVhAqsBwgh+EG4OwgCgYiDaByIFNlAYLwgCg4iDo3aDyIFEoNwgbAhgDRQAjfgGNKUACb9UCQFwg-eqkB8IIEYQQNIgkWFBqY1HRVEWAJEGzLFMqDMWAeEHxdS2AHSQQwSJGEB7AHYBnAC5Q3FAAvFAAZtwANj4ApgDc7t7+giHhUbEJEJ6+AaKhEdHxiTkSqQUZbhDFyQCOAIyp3JnZtQBMqeIA2gAMALrNSQE1AMypNe0A1FD1UFPiDpExXgDmfgAWAyU1ACypAgtLq2uzgp2tvQcr65u1AKx7IcGhwp11vT391UMAbKkvbx9Hs9Xu8+h8bkMAOxjX5PUI1e5wqD-d5vCHTAAcAC4oF4AK6RSJ-cFAA)
- Типы, как множества
    - [Задание #3](https://www.typescriptlang.org/play?strictNullChecks=false&ts=4.1.3#code/PQKgsAUABDWFggg+EEDwgTCsIIXhBBCIIBhBACIIDhBB5ECXygAEAXAZwFoBTADwAc6BjC+gJ04HtOpA-CDJUgcRAMgaRAogQRBMuBCMBcIPgA0UQEwgUBQkwJc4wKIgUQCwgCQNwggNhB0kwIwg4zIBkQKAkASIPmtL1UQCIg+dNlP26MhQuKjOGPj4AHSQsFCAqCBSpqQagLIgmPiGMnKK2IYubggKUOioUNaAwiBGqJiqWkgC+KaEOrhQACoAyuriRtgyTq7uFZrIjc2AYiCRqkJGctalZUgIlgiCOfg4DlCA7CDVUvYAXLGwABYUFExUh8DAAO4PURQAnixUrJwAlkwUADYAhgA7ADmUT4wOAABMeKwqMBTkDIQAjHg8ADWwE4dF+dH+VDoNEBPAodDhLzeH2+HAAzDQAJxRc4AW1+AGIaNR6Mw2Bw6Nw+DRWDwmUy6IDqJAQMBIJBQCcYIBiEAU2HMmyW2AUUnwSH8gTW2QQgGYQfBlDICSRGZpQf4ARlU-wATPbqaoRDpbCUyrZTGsCtYiqMGk1CFNopLpRAcRRrTbDgBuSC2qAAXigNoTECTqYdGcgUetDvjiYdKbTGcdpZzxdLNqgAGooFWIHm6NH-tSi5nqaWAEQA349+tQHv-QcNnto0fl7upiicACudFzEDl0FgSpVaqgOs12t1QWksiNJqgZotVqRdqgSKd15dUDdCA9pXK4h9g0KxXq4xDkRiEClFto0vTtL1LABtG0AAZVBtABWABdDMwNTSC4KHAB2WCoIQ2VgHITlGBYdguF4ThICRSCEJrAA2Zd8xvUCHXAnDe37f5Jx7ZDmNY1MbxY6iG34nCMyFQEqGjVhTjYNEAH0b1k2Nr1RHEgXA6i+OYm0kLwgjaCInlSL4CitIQ8CHVw5tI1bO9OzEiSoCkmT5OpRTSyRakohxEEKFOUSeHEyTpNYOSPNkwsoAkr4QXc6lwJoqCcIE-zAsc4LQtcjsoEBecmSRPkoAAH2UnhVMBWK0LM7TkM8ph5yoU4AApwJ7HK8r5HtsIQgBKGqojqhrmp7FFStxQFOqgOdFx6jNbj0rliN5flyIgDz+vqpqWra-LOAmgAzf5fnxHrdMofTuRIvkyIo2qNqGkayomm0aJmmUV3ANdFWVVVMHVXcdQCA8DWNU18HNYwrQEVBQjQdArEMSFaxoKBEZgh93UkF9vV9IYA2-YNQ3DSB7Mk2tUwS1RWBLVM+0OjjR0pmcoAOo6lzekmUaU0tWHTYmAocyEIu52sGx5lKBay4Whyp8Xo0hAAWQ4YFTHmU2TcmoNllG4KViCecp6q+dSyEaN11CogtqmdIgDnIQws2oHAi2onA-XHO063bYADgdp2Lddq8rc9-m5bpX3nYD1Q-aiIPg+N6Dw4tk3KdvCPWHvHmEOt2UPriDcfrKUxADkQf1AE4QU8wYhwhBGh1BYaCcu6FdDHyjMYp0Hwcwynx5I5DUfwpEIInrOjOhOyNhy6DJqA2YgOh1sG2mAU43qJ9HiKHrG0s6HMuPJ6yyC0fgjSZ61uhFcdqLPhBE-Z45ugdagABBbh-meAAecCr5i4roIQgA+CCzsd5wRwkhIAA)
    - [Тест](https://docs.google.com/forms/d/e/1FAIpQLSdoEt54rr4l0UZaxu9GnlUVC-KOwNt7yYgyGAxCok3X2FX80A/viewform?usp=sf_link)
- Объекты
    - [Задание #4](https://www.typescriptlang.org/play?strictNullChecks=false#code/PQKgsAUABDWFggg+EEDwgTCsIIXhBBCIIBhBACIIDhBB5ECXygAEAXAZwFoBTADwAc6BjC+gJ04HtOpA-CDJUgcRAMgaRAogQRBMuBCMBcIPgA0UQEwgUBQkwJc4wKIgUQCwgCQNwggNhB0kwIwg4zIBkQKAkASIPmtL1UQCIg+dNlP26MhQuKjOGPj4AHSQsFCAqCBSpqQagLIgmPiGMnKK2IYubggKUOioUNaAwiBGqJiqWkgC+KaEOrhQACoAyuriRtgyTq7uFZrIjc2AYiCRqkJGctalZUgIlgiCOfg4DlCA7CDVUvYAXLGwABYUFExUh8DAAO4PURQAnixUrJwAlkwUADYAhgA7ADmUT4wOAABMeKwqMBTkDIQAjHg8ADWwE4dF+dH+VDoNEBPAodDhLzeH2+HAAzDQAJxRc4AW1+AGIaNR6Mw2Bw6Nw+DRWDwmUy6IDqJAQMBIJBQCcYIBiEAU2HMmzKOz8YnQRFUIh0thKZVspjWBWsRVGDSahCm+El0ogQsBVAoUH+AEZDlAAN4AXygAF4oABuSBOl1ugBMXu9UAAZp6oICAK5MpF8qD+oOhx08Z2u-7UmPxxPugAMqjj0agFE4yboUAAPlAXV8QZnAyGw3mI-8ACzFhNelNpjP+5uxoct2ufdtZru5-NugCsg-dAH5h6n05xK5HN0nt2POznZeBoLAlSq1VAMgJxLr9ZJSuVxCbBoVivVxjbIvbIDirpIomnaTl67rLlAADUUAQZmObAaB8ZegARACAJov8KHQVAKFMv8GFYfBMoQIBUBItWSFVoORa4eh-yYdh-q+ghkZUYmADa5YALp7jRqH4YRTHERAAF0EBtHsV6tb1iJSLUlJ8YEfiIm3OQnKMCw7BcLwnCQPJUQJp2Ml0KepHieRA4wEGsb-NJdZ0KoSJenGykNix+l9hxKGsCh3Gdq5vz4ghXkoQAjn5AVuSF3lETBKFIpFQYmWZcoXoqyqqpgZR3pIRjNFAADCACCqiFQAQmVhVlQAIo+CAGi+xqmkMFrftatr-hA5INiVJ6QD1RXlf13WvL1hUjYNhU1SN3ZLqwiZ9UGaEEQxWE5uGrqsNWS1QAtOELRtPZbbRFWduWR3zVZZ1BoFwVzRGrCrkVE02SW4EAGwiZte0fV6hWvT6717QpHmLo9ADs-0zUGHHcRtENREwyZUKcAAUtmofRjGZgAlAjSMo+jsaxdh8WJdxAmrTjvr4yRaVxIAGCBSEIAQ7BUhCCKgoRoOg6AVIAciBQJCqgIAI3PYK06g7C0RC3vgAjYIIawKKYAsiNgSCqD1PBxqoaJ0M8utQHa6U1mNbq-J8eI0JINXFVANBQDVABiUAVJlN65cYBX247zsu-VjVGm+LWfpaP62jEEBSg9rqQqB8rAx9FZJ9RdHU1hyhp7R3pJ3EcZWXddBJ762cQL6JGDX72YDRbNXDbXo0sM7gM5tXMMLtXACik3127Tdx8LiY18Ll0RpC1YN+dy5ljmZGQrRNWA3hmcoTmi+dtSZZz0PkJWTVncpXvy4APqJihCbYc2l+RtfuFxtS2HLVf4-x89NW90GkJn+6b-Cx9c+qEr5NgfnfUBl8n4QMLs-B+fZ157z+gHTskJAF-3pueJmLMzD2HZpzb23cHZO27jNUgYsJatEkAAAwAGRUJNlAKhjYqGqA9tebK8t7w+05nQd0-s6B9nLnEPUDVnwh3fGaNqYwOp-hjg6QahCkJ2UPKOfgldm4Nm7o3IGzlpxtmBJmOuLdu6A1jKwA8KIeA4iBIYjRUASFKK9BxEcO5-LqKHrwr0NllHlicljNeYMfp0GrN48Cy4-G4UEmtFCqhWAuTcoE46UA6C0RsmDMiAivE+mUSnMsYMBGgWUVxZc3EWJAA)
    - [Тест](https://docs.google.com/forms/d/e/1FAIpQLSc8imy1IR8rPN5z4pMdmlYNJnKks0NMdNnh3OnjFMqvVkf0Jw/viewform?usp=sf_link)
- Функции
    - [Задание #5](https://www.typescriptlang.org/play?strictNullChecks=false#code/PQKgsAUABDWMQgguEEAwgg2EEBwgghEEKwgVCCIGwZhBBeECQ0GEQQARBBpECkBEQMohQMRA1BOECgEMBGAWg4FYANFEDiIBkB8IIEYQGkRzTA3CDio4wBIgaSeIRQE4wDwggfhA08wPIgLNJBDBIAMwCuAOwDGAFwCWAe3ucuACgCUUADeUAC+Ng4uHl4cAEz+QaHhTm6enADM8cFhEHbJUZwALJmJOREp0fzF2ZDcPlwADH4A3DW+-FAA1FAxzTVxDcLOAE62AKa9ELE+AEQANhzzANYc08LWCwDO4y2TGRMcGYEh+4dQ1lwAXFDTALYLHMvToROOnhvOUAD6HAVX9rY3ABGoyGUAAvIV-DtXvZ3l8BFd3kNXPYAObgziVAB0OIA2nN7o9hLdCSsALoTSCgSCwKCAPBBDGpsFAMGh9DQAEIAQWEHI5UDQUA5AGFhGIpDI5FRFMo1BotDoDEZTGhzBBLJBnABPAAOoyFXIx-1msx22r1Qv5EONps1uv1IqNthNO0gMLhgMuBox8TBAD5rvMlitoW8PoCYlduRiOOCAwTg08uhwdp66o1U-1+JSIO7w2ko1aoL6A7iuPwyaHYeHfpaY3HOKmMmX6vUKamijm81BAfwo8KfQF-VAGlWPQA2fv14cpt1hnsAdinEJ8HGEgKHAdjXUBY-DAA5l8W1z3hI5N5xOj2r45U5Vx-VhAvHyPW8Jy8IYl-hGk0gUc9S0CwIgqCYDguAYBQ4gEGgOD6FgFBYAQFBkIA7CAIIK9CMGYUAAAaOLhYoSNIUCyFAChKKo6iaNoeiGCYOE0rAmEMMwaCAHIgeEEaRWDyIAMiCocY5HSkogBMIFQqGiaQfF4NoSAYbogpkAQ4iACwgRBKPoSAUEguhYJBulqhqpR5Kkjj+H8ALAkMOy5JEZk+DiWJDKM7xXBw9hariFLuZ5QSQJA1S5vOjhev8QIghi5kvCFkZQLi4XWWSUXpjF1ZQI4BZQEiKLohC5nTDlaKrIGpLTGlcKOLWiWRflMw1UMJUNBVHyOH2PbuO4syjB5KXTICnXdR5JXrLMWwtRlk4dV1PVeHV0weVqSbXEVqIlcMYwAeAQEwAyaBMjgjgLPMgLdTwaBENgFC0FgrC4DQAAiXI8A9D1ERKUD6BQgpoLg+jiPxqHiFJRCqp9CFYHpRBEFQgCiIFAAAmvAIwUTEwGRFGytRCp0cqZgWFYEAos4ILrI4+pPf5EBBcTpMcOTUAPfygSBQFRP2CTQxkxTA4s9TbO01z9MUw9VNBd2SNXJT1rOrawXpQjcVM06LpzgrWUPQOMuq-LcIo1Lova3LkBIz47RdNmOyKz445XuOE2fIrlkRaCELW9MC7LR75V7l8CNZQNM29W7GQbaMaybOHUBhxHY1RzH0cjPHSeDCnZyRxNszO9ZGIo1i3Vos4AAWvu4gAHsIWrJW7BRYjq7gbK45S+yjnxeqtudFBmat6wUnxxQ1nd1BNrcB4Ns1Dw09RXvwrbNEAA)
    - [Тест](https://docs.google.com/forms/d/e/1FAIpQLScVFtG0snYPZ60B9nP5AEKOjSo4n_dKAOsmVCeU1q0k4WmTZA/viewform?usp=sf_link)
- Задачки практики середины курса:
    - [Практическое задание #1](https://www.typescriptlang.org/play?#code/PQKgsAUABDWLgghhEEGwgheEEHwgVBCIIDhBD8INwdhBtABEDUCYQQBhBNAZECmxU0FYQYwERBHBOEEEEQKAYQEMANgGMArgL4AXAPYAnADRYKgLhAFgcRBMaQIwggaRAoZbQXK6ABkMGjx0mcag7A3CDYokWFG5pAEiDZNSioB4QR0povvh2gPIggGIg2I7YDraMBFAo2ICiIHpQBBRk2JzYvmicOFBomFC4zIyALCAUKCjaqbgUxH6MmKRkAHTOsIBEIHi6AMoiALYAgkISAJZSAHYKADIAptMA5hIAFmOTMwoAWgsyUptT04pKSIxQeagYvowooTSdECDAkJASAJ4ADgtQg6PjY5QAC8UAAFO1IV8+DI+EMAM4ALigfGmHwAlCCAHwotEAbne31+ixW6yOMxB4Mh7WhsIRyNRGOxuI+BIgnx+UD2B3JJ1BEKhMLhSJZmOBOMZbI5xKky15lIFNKF9NFzMVtOFDLRYol+LeEAm0wk+wAZnwhL9+MIxJJZFAAN5dGBgoRSIZDVEAE2R8IkMkNy3RyP+vLZLhdbo9029UF9-pWQagJNWG0BMzDsAj7q9Pr9AcT3MOaemGedruz0dz8cDyLmstDkAAvvrQFBALQgGhKgQqWFIgGYQKi0FAXFDIdBQF6QV3TX1QMzWyyyZFWiy2mQK8tRmNx-Naj7Mx3QWDwgDuEwkQjW4M3Xsxh5cLjM8N+ACJ4cMX4inQ+XDIFhIRBkE4wT4PcFAAIz3HUUSgABqKBwNLB8n1fAQlhTT9vx-GA-wAoDwVA1VxRRdo0NJNYkMfPhnygF8AC99ikTCj2w2BcMA4DCMZaDpSkE0YOBQTaJ3FYXygAB+EiyJTKAAEIhIABigBk5MUyjYBQ2iBFlZjWN-f8OPBSCiJxECoOZABZSQ1lI2UQMxYAoCs9ZbOWMFwPRb9mwgbzWwAWgCidXggSBW0ARBB4iKTxNDQJQgqncwbSsME3w-dEwQARgUhQMoAVk8iB51XZKX2k9YX3Sl8AEcTwWGq6oqhKFzXFKGIOCrMoUgqiqS2RWsYjrqtq+rGsKmZZwEPk50SxcZBS7Tlg65ybIAUQKybMvyprir60qdPSgAmQ7coANgK8LIo8LxYvikKIFAb9ACwQIJbgYRpsFCfwoAAAQkeE-IWAAPH5xgBmQDnXXAgkYVQ7l0ApSFUJRsAUMgoECDRiDqKAKjQOxUF0HQaCirxkbSFh6AoOxqHQXwoGIRh3DuKInhcQBUEE4WI0cAWRAcFSBG0CRihUiumK4uHWwEAqFoFECYIYgeNBiCgAAVfo9G0KoChJ7wEHRoIQgiKIFChipSE0YcLiucdcER7BMEHdJpc4agvxYqA1gkCQviRYBgBPAP2mleEhH9L4JHEFZ2lkZZgE9KQhHhYA1i9cCpCkABrYA-zQ6iFj86YpGNJPg9DiZw78gBmPyAE52k9oYBAAYj8v6AeBhZQf2CG-M3JY-sgSc7tbQBCEB1nwvqHv2frboGQYkMGIe23q5tKwQ+AzvhBo9cRN9G0LHN+-6587hfu9kZfZpS98hg6v0RAWc7D9njuu-Bi-CpmlrUtv9Ksqfmex9X5n3fjIS+38b6DQyvve6z8gHz0Xh-HqV9SroXKn-LqB9AHtwQefMBn9molTKmsO+MgH4AKPjg0+iD8HIO-sQwaW8FAvnAjA6elCT5vyXgQnaq82pMQwTlTBsDsGcJAdwuhJV+EdSyswrKo12Ev1waA8BUiBqVXkUIihSjqF4NUbtaR6V76PywRw4BND9F8PUWCe0jZtHwN0SonhK9+rtXSgAbQALoFVMTorhSCv5EP2ilBYCi4FUP8bQwJu0FpQIUmE0R5i9HOJQbEoxZCTEiLMcoiR0TV5pM6hohS8T7ERPEQEwhMTgn-zBMY0pYiLEpPocEg6QiDoABZzogCgAFPyQUgA)
    - [Практическое задание #2](https://www.typescriptlang.org/play/#code/PQKgsAUABDWCgggGEELwghpECkwrCCEEQQXCCD4QQbhBAZEHykHYQBQZhA9AhED0CYQAjJVQURAoAXATwAcBTKAEMANgEtBAZwB0UQPgggARBAHCBRA-CB5APCB5AkiDKki9gCIseQIwg85Aag1FKqAGUOAVwAmfAHYcpkWFECEIKYwlGgwrGzQAFT5BAGMACz4AJyhlABFRBL5ojgB7JMUyZPUMQDkQHVYsQHkQULV6GTgCKpV5BkCcZUUsNWIyQGEQQE4QYO9YFUCMIpYUEPooLARNdXR8nplAHBA8QDYQJDwoPCaMQBYQDAaaInQGSeqUL2hYIZhImPi8oowaZMOka0AREEUcBDp5AAaQoVYE9Zr0ZinXCKAgIZIzAgMBDyU75KAYahQHDg4y1O5QQBIIIjkfIQjj5HioA84okALTwtTYgjFQDiID0oKJnNjcfCmOtFG9TIApEAwODeWHezG+v3+eGaCwps0BBKQCDI9GQijGCOaxGKUB6rMFRwq1wJaQyWVyhQwryln0UPz+AOBinUoJJmtRMxoPQ+dGmyiwSO9pyNJqYfRkvlDKKIBKwfoDDFU2y5vv90vhxkO8gFQpMovFMwdMpd8o0CPdzB1SaznwQ1x8sdJ4eNwSjac53IjnaqucCBZ2RbFErLTtlAI0bvGYzBEMw6gJyjwgDEQZj4PqGjumyAgYCQbj8KAAVQkiSgAF4oABvAlcgBcUAkHASojcAHMANwEtyCABbPhn1fd8v1-CAAF9ICPXgBAAYWyRwEgva87wfZxnzcRwAIAI0SCCfA4UQOGEYCXzfD8f0gaCIFgk8AHUSNiAAlQQOAEG97xuGAEnY8iAEYoAAHygAAmESoAAZkkgAWSSAFYINo+iBCYjhYgcFx3A4FjsjItDuJ8BJ9PIgxX20jwDBomCIGPNTmJpJ49IMriCRMsjnwMDjHkSayoNs+yoHU2IABk+AANz4YRDIJMiouELyACtHDcURcksUSDAArlnDIzKoHM9x0oSfzaNAKA6SqqAD0CuD7CcVwPEQ5DUJvFqUIEAAyYLmK0prdNMqAepCtiOOG3qNPChLVIayyODQ89Lx628oGiJDOokZ9VoAbSfKBsLwxIAF1n36nSOtQyCoBUuz6qcy8byWhI6pPS1MhyJInovBIIMgUBqrkCFWnhSq6VqiB1rcV8XwEs7Gp02KeJ7LyJAEgwVWR-8gNR9HMZ8dbWr4Lb0ORnwdoE07SZ8GnYH2gT8dpmniNIsyADF0lfDGCSZqA+I458FMZ3neNM1GEas4WRfi6KvJy5w8r4fzedonxIMx26oZhjg4epKJaS+6m6cwwqde5rHALMs2pZlxLCpStKMqlwnNu2nnYB2hSqaMkWYH2oX3dplnPMKjmADMNPN33RZD7z9aeZWmfVwOoAp72U58KQs7RqQXYvCQ06l3mPKt+O-JT1XYFozXsmhhbnF197rUNn2-ZNgwG6j2BsbMzupYsgaSdbmmdvM9GqbRouPfMsSDHTsmmf2meu99nvUdniuCWT5GfINoeU9Hs35+jqAs6kHWp9p-nyKky+brvw-Z+P6Ol44We758NfTffjPYFt1HipO1-rxfigtN7I2rrZCqVU6Q1WAEAA)
    - [Практическое задание #3](https://www.typescriptlang.org/play/index.html#code/PQKgsAUABFgEIIrCCAYQQ3CCA4QQ7CCGEQQnCCCEQeUgIiCaC8IIFwggYiCqByIFALYCGA1gKYDKALiwA4A0UZQHwguQYAEQRIHkQKIH4QQTNHxALCCBpEEWZAkiDxAPCCYogQRBBekRJI0oqQMwgo5VEBMIIPS3x6xPFyQYe5EszVNBVDQoADsAVwAbcIA6OCQ0LDwCWz0CEnhBQEYQQFEQQUVULWUCRWQpNIJcVGllGMAMEHQM+AtERKgGYIBPKMgPKABxBjp2DgYuAC4emABaegZuKGmtRD09VFtzK0FbZSyoTMApEHgyETWACkBxEBEoQFkQS9xEIQJp00A2EHgASgn5qG5whnaWABOAAUAPYAZy+qEUhz0128WngJDu61EgjIiDsUEWy1WAQ2Wx2+0Ox0+0zBAGMQQCWF98GQNKhsPozm5SVAOKEAcEviRBAjRFA6RpGnIcopEN1oFAavjBEyiUcvjc5EZUej+EIROIpNJRKhTIs3LtFLzzOh9N41H5UDt0CRECzTNhRjA2QAiIFuyEbMjugCiXumTkQFndABlA-o0ajbKhNO6APqRvT2DK5e1SMjeXDoyUwQBYIIhniomWKUWioCcPW63jJlHc3HodfAFAijKhcIAZECbdl1iHsMUASCBQdD91ArLSGCq7XCCwQWQQa+5ynqWGNy3YZA6K+1ijs9vR92wY4Tl9XyQTjsUSWdeHzWgi69IZcToTaIUwScZSqZQQCoIF4qD6EeGIppk6aSAI2bopWbpJrW0xrhW0gtto8AuI2pSgam6a+FBbj0t+MDEVAADa1b8HBboALrzAAfGRVGUZ61EANykgBQSHuIx5RmQMZxgQVYRghZ5QA0Ci3tGmyCfwU6uLgB44SakFZgRiBESRjGepREa0ZMDHkTpUBUbRABkUAUlSNIALyWZS1JQAA1FAACM7E-vMnFAdx-YYsGFiwQGolIWQUCYBkqwKXY4gLnJRgKQe0mxpomkkUZbqUQG+mGRRJl6R5PQyuII73B+ZxRZhGrzuK3y-P8wLglANktTM3BROELDBAA5hwAAW8yuTEgAoICU1wiAuMysJwPBQIogjIM89o9LYLYkJgXYhBE0RFVYuiTktcijtImDtptZC8tIQhMgASqEwS1LKBAGEYggmKgBB6nomCYZiQgkAYaAxN5PSyLs-1nB+ZhrjYaz-YDQFpLOgiABIgqBpmF0x2g6HYohiCgoBg772nYa2CD0JyBEBwirbOsjzRY9poG8MSAGgg8DIIg+DIJ2vL8BcmSwwIRbzVoUC8vYYv9IMnAjCwkwEBkyjIOLmzKEyVxkOg2jSCUArYisx6rrKTLoqIuDVJAIDAJKHDtNwNLS0McvNa0HSSgAZvd5IcAAliC3KMNNXDcCcADedV-ICoJgvwjB8PZ1n8ByXJQAAvi6Tuy1wbyZwMztcFAAA+W2RFAYeQGnkqQKAkzTPmuSlSdegwTD8yTNbkCUsEYIcJZwwAhwACysyuxllFJhPmUmZPJkBlPWXT2688z0vEYL6vi8b26BVdwHvf9wwg-Zywecy8Mhd2RHVnUi6AAMcezC6vdH8Psz8D8UeNWC9-J5ywT33Th5TqfcX6X0PsfC+LAPLdwPiwAAHg7H2LAAAmAAVf+EI7IACYAAsMD959wQUgrgKC2AOVslAAAbIVCAJwvbBB9v7bk4QQQglDrWCunlYF92CAgjgJ9XZByGDwE4YCWBvA8iRX2HtKx8PgQIqBzVWphEiJwz4JFYEgk6h1EE3UTgAAMMGp0pPdDgLoAAkYdxFRBTsENOBiPieU0fvbRLBdH6IMeQ6yljrFQKiDfFgDjJEaOIjIysNi7FQAAIStWISwZB6DMHFxLjYwJMS4mIISaQ7xjki6pP8fHUiNj44dS6r1AakxXK0ViXZas6jnFaRgP1AEIIADuIQWAdL9ACVpAIqxsBBIMfqvtuRtNaT1GsUimnp1CTAakdjpkwCrtw1xOjySdSPicEJqye5uI8SceRii5ZRFKQAKxBKMqsNYnEkXEa7I5J8lmWRYBwNBvtBgglCBwE4rD2H8FcnfIFTi05vG2R5Wu0x27WyAA)
- Generics
    - [Задание #6](https://www.typescriptlang.org/play?strictNullChecks=false#code/PQKgUABFGFggh8IIHhAGFYQQvCCCEQQDCCAEQQHCCHkQBXCAAQBcBnAWgFMAPABxoGMzaAndge3YkH4QRMkDiIGkDSIBECCIOmxwhgLhBcAGgiAmEAhy46ONlGBREAiAWEDiBuEEBsIKnGBGEFHpAMiAQ4gCRBclhaoiAREFypMx26kQIbGRHNFxcADpIaEBUEAljYjVAWRB0XH0pGXlMfScXODkIVGQIS0BhEANkdGUNBD5cY3wtbAgAFQBlVVEDTCkHZ1dS9UQ6hsAxEHDlAQMZSyLihDhzOH5M3Cw7CEB2EAqJWwAuaKgACzIyBgo94GAAd1uIsgBPJgpmdgBLBjIAGwBDADsAOYRHgA4AAEy4zAowCO-zBACMuFwANbAdg0L40H4UGhUP5cMg0aGPZ6vD5sADMVAAnBETgBbL4AYiolFojBYbBonB4VGYXHp9Jof0oYBAwDAYFAhwggAwQCQCPybUr4CAA4Xct7MKh8HCYFDSUTKOB1ZzoYoSXCAZhAfOhSjpPKVUHJxoBOEAgPwAjFQfgAWRQyoRaayFYrWYzLXKWfJDWr1fDjXBiiUAMwArn9WG8uH8PZ6ABQASggAG8IABfMDpzNkbO5n4AJiLpYrVYzWZzHopRbL6LIafYub+aa+XwA3K3qx3676exA+wOhyPx62wF7856AAyFifrgBEv1+yJ+e53efzZHYaZoZ-XZYA2gefkeTxAANQQPf058-Y97gC6ewQFuFa3gW95bv+YH5o+h6-ieUG7uBl7XohkqNhum7KFut5Nk+L57th267k2KE0Mo+HwaeJH5g+lF-u+n7fgRgHAZuFbKCmz44jua5NhBm7-sodFwQxH5fj+f6sSB5a4TB9EIco95kYhHr8SpSkKQBvFgJiZBdgA+p6QHDvS8LchAAC8XaYYWyg-BSBkNkBFCXm8gJWTZWl2YZFJAYiXCYv8nkOfmXFfDx9mOb6JlpmZ3L3v+IXdhBDYUmhuk0PpfpGS5bkedZfq2fZvpOf5SJBbmhWzveACsWFsVBJUGX5LYpp6AD8sXxbw5YhbO4U8ZK0rQHKiq2Mqqrqn8mrarq2D6pUOjGqaazFKkfDiAAQgAglQW0ACLKEGcAhkUJSiBGfR5AUNQjAm4TJmAJI0BAu2eWOz1PK9W1bR9X1MG9ADC-3uYS7BccwP0HaWYCVmA-J-K5EDwsZb07QAPKZ5nsAAfJ5W6fYjyPws56MY657yAvj1laUTOYk61u0YwJyiU+5AL-jTECs0xkkIZ9CMM-p8IxW9W0YwAbJum7c2W7VAdL7HlvTSMi7VQG-VjcU43LEAKxASuMfVyuqyTkuaxLAWVYlesG4lFaC8TIsAOya0DGO1RRKZvAAbjQe7c3V3t+wH-5myLAAc7vaz1FFgm8AJvGQgeefeLvx4nycARHKPUjH2MJUJPPs4CbP5ZzQe856XvAbVxewfzhF8yx4eSs7KNbprB2xzjyiF3jnllj8QFbso8Kj6bQtq53aOHRTFf9zr3J6yPn5bs3E9sY708k56ZPz6XAKJUpnqehAAA+wENhRZ97pf68Ns3R+JVzQ8ekBjcsePn9n7fT+aWYlRf8SUVbDXAKNeU41Jpqg1O8OaeoDTLUMMgDwJh0AWGKJsHwIhUAEAgMQOAVoFp4Nwfg6as0dSIKWnAFQAZRomlwGaC01pbT2nEB4J0LpcDumYD8PkYJjrBnEOdcMkZ+gxjuvGRMT0py1k7Hw5sZZKxyLrBAZg8IlHziyouCAw5RwThUe2eRuZmDMC0QuQcejlyGLbDWNRzAwRaPhh3Zg59rKKLHhABstVeKuIbJ5TxDU9w+OorvfSzAKSBJ+AvKmAJcb5j3BvCioS-HC3Ub6aJsSOZLx6gkpJm5m4+N4lcUgbJ6BMFYBwbg7BwnqNqlko++TkneN8U7dJzBJaBM0d5T6pTyDUAqZyapPA6nMBdt02yudmDR3XoUyZBSwmuPzhAI+CyXaFJ0q4kCHjzF7hPGkmebi0b7PvrsxJBzpn7yAnueEZz1F7LuSU4AZTBkciqdyGpYzPRRPOXuAkRwLJHzCd8zJHiwQY2HnlOJHFPwngSVC9etV77lgopc75DTwWQv1mjAesK9ztUDrRHFo8Gmos-ISw5yM3FdPBcStepyf6GxlsoZgv8Go11ARRZgSyOmegmXSxFjKUaKxZeo9l2F674vRf08p7yuQ8lqdsyOgSIWIrWeS05CKP6flEq+TV-wHhhNlW8ypCqvnbOpKq7Fa8NVor+Ea7VDK9UovtUa55rz2RmpGUqjpDZ2KCv1mTX0ZLvaemokAA)
    - [Задание #7](https://www.typescriptlang.org/play?#code/PQKgsAUABDWBgghBEEPwgg+EENwggZEEOwgh5ECgcwFMA7QgJwEsBjAWiUAYQQARB7AeEEFYQQIRBHBpEABooOgDhAkgrIMaBhEECcIBzZRAIiATAvCCAuEEBiIIMByIFABeFAA69IsKIHEQDikCMINyhK51tCigpAEiCDLKFVBUoWItDgaggB0UIBIIChYLCiAbCBKKPyoXGyWEpwIOMawgCwgKCII9BwYAsI2gEwgAmxocoqqQZAgwJAAZgCuxFQALhQA9sS6BgAUzRRkAM6d-GOEVH0AJgCUUADeWbPEE1AAthTEADIk+J0AFlAAvFAAsgCGJ8E7xMOjE8EANocnUzPzbx-HCwBuNZ9TZkQhjVqvTrnKAAbQAukDoFBmj0yFBBu9oRQYQAGAFQHEAHm2uwOxCOxwJFAA1DSlqtkTAwRCocF9K0xsdBrCRuNOrCKPCvus5oL4fCFlkAL5ZMGdVpkfosyGdSCyiCQdabACOAEYAFxQACCZDI1wAnkTYcRWlsAEbkKadSgU+EAPhhen0PL1-AATPwAMz8AAs-AArPwAGzCuEAIj18f48f9yag8aD8clSO10J1-qNpvNVth9p6PXe12I-HLlcI1Y9XqGsJdrUIcd511e034zW70xzWpB9bePXwg31-ALgKAA)
    - [Задание #8](https://www.typescriptlang.org/play?#code/PQKgsAUABDWBgghBEEPwgg+EENwggZEEOwgh5ECgcwFMA7QgJwEsBjAWiUAYQQARB7AeEEFYQQIRBHBpEABooOgDhAkgrIMaBhEECcIBzZRAIiATAvCCAuEEBiIIMByIATIB7AK4AHAEIBPXpFhRA4iAcUgRhBuUJXMdoUUFIAkQQfZQqoFRQWETQcDUEAOihAJBAULBYUQDYQJRR+VC42ewlOBBxLWEAWEBQRBHoODAFhJ0AmEAE2NDlFVQjIEGBIADN9YioAFwpdYh0DE1MACgBnAzIqQn4Aa0JTAGVCABtCft0yfgA3AEN1-UI1ze2yAEooAG8CqiHJvqgyQkn9deeAXihSAHcoABZA6GcaXADcBU6Oyg402zwoUB+AAZwVBEQAeKDTfSzQiRTbEfB9AAWaIoAGoKdc7tBYA9iE90X1CABbJHYmZzADaFAAupC6TAGUylqYOWKzls+jtxhQWaz+BQIQVhY9nodjoQOZqTlKLnKFUqVUL0Z1YQBCV7vT6REkHSbjMWXGmq2DWj59SKTQh9J3LfjcvkmqwAXzdHttRD9zsihn0kxJ411hBDUHDEAKrz6uOGkb6gozkBFzwAjgBGABcQJBGOI+lZACNyPx603yEGAHwc-B6Ixmcbc8v8ABM-AAzPwACx8-gADyR3YXAFIoGOoAuvkuoBSoOWTSWoKWR9XgYYMY3dLpNgdiPwbnPq09KESldW282yKGuzAfr3RgO3IAEQHKBQH8EBjZQeBUBAVQVAwUBpaIesRwHAsBxAbOsIAPrGou6LLiOSJfCi-DjHO+FbrCNwUPOoYusWjzXvi6y6Pg4wVvwx4QkAA)
    - [Тест](https://docs.google.com/forms/d/e/1FAIpQLSdlTz1EhwzoH7CLF9Wo-Jwy2v1qlErMTlnrCbllYwf0yXJlVQ/viewform?usp=sf_link)
- Классы
    - [Задание #9](https://www.typescriptlang.org/play?#code/PQKgBAsAUGtouCCAYQQ-CCA4QQEiCsEIghWEDAYwBsBDAZ1LACEyBTaOMQDBBBBEGUD4QQbhBAZEEHYQQYRBAnCC4wgRhBOgLhBUYAESAsEDaAWEFE4eYNpjHjpYKXMVhmajeMSAeEFTaFHQPIgYZIAEQNoCYQHPclgsqND0SAxEFSo9HCA+CBszBx4ToDSIOwcgLwgOHGotuKKiGBOYKlxzJxSCpyAbCBxbKJRWFxggOIgqOGlACwADNAgwNDQoGDySiIqRqiaYK3QRGQUAIJgNAAeAC40AHYAJhTUpDRgAN5BsPgA9gukswBOAK74s3vHABTTAFxgC6cAtgBGNMcAlFs7DGCkpwADh9bgAaGTjaSfADcvwAvu0YHBAadXoQAJb4AjEQj4a4ATweTzeH0+RJe72OPyRfzAxxos1OxwWYFmAAt0aQAHTTMAAajA+NhNLACKgYpGJHIVCmc0WKyotGpDH2hxO50uN0J-xO6IWAHNvtsRQwAcCbgBGRrg-Ew+GIhgotGY7G4gnkklfZW0ukMpkswHEY7rACSC1m13ZnK5tv5guFDDFEqgqqOrvwpxImtIDzWNAA2gBdMAAXjA+YWNAA7mBxtcrZ9wZWa5RrtIrVDC8LU7N-i9S+nM8Rs1znsRAbdSwA+MDTLn4HF4ufTT6fLn0pbnGjXa7EcH4b4lmfEOMH7sHUh7Qg0LmEPb664A552qCdAC0H6GbSgHRAv3kpimIkWCIPYyTmGAAACsykG+MzAhccHHMcVx2GwQFVIkUQGFgjhVJI4KZKkWBsPYUSAKIgYAFBwxTYSI5SVOoAzuJkgAiIKgcSINwJSmGA9g4OgiQBFyvyAKgg4RSJkgCyIJ4lHMLhbD4YglFMYMCSiHwCg4Fg4KpKYaA2CR9hgAAKgAyhkUQKIg8n9CI4h8Fk6EGdY-ioOC7AKI4IgJHgphsMUpQOIp2CIBUYA8FpzBcHcvxsrMsyAjmwDAFWaVcrM+LAqQ+DHOigKzCQBpclc+rAEsez4KQwBssQyyvHsewANbAPS160G+Cx7PM1WZdluX5bMb4AMxvgAnFy8XPIQADEb4wXB0wIUNHwoccb77M8zyLDBLTfr+XT6IYqkmBBwyvsAUELfBNCIatVwjIuQ7ZvmjSFjGwopVdsE3XdyEPVAzaKus9bWjIHYvu+n6tEAA)
     - [Задание #10](https://www.typescriptlang.org/play?#code/PQKgBAsAUGtouCCAYQQ-CCA4QQEiCsEIghWEDILhBBuEEUEEQEsADTFTC1WUoBUBPABwFNo4xAMEBOUB8IIUAyIIHYQQMIggThBcYQIwgQ-DQBEgLBABgFhA5OUWAGZ5+JdTCqNYcntSz8iQDwgqI+sKB5EDDJAAiADATCA53i2vSoooiAYiCoqFxwgPggAiSEeF6A0iCChIC8IDipqK74GohgXgQCqSRCNOpCgGwgqQJyiVjCYIDiIKhxNUoATAAMYACMAKxK0CDA0NCgYGqastq6+gL4YMPQAMYANgCGAM6blGAA3tAAvqNQAC5s7EwXYAC8YOsAdswA3CcAlg+n7ABOAGbry0uAEF9pFYAAPABcYAeAFcALYAIx+rygxyg0A+Xz+AMuACFQTA4KxvljoQAKZjQzanUkPADmAEpbgA+MAANwA9m8ACao9HQX6wh7LU5vTkPMDLb7sdZfclQmEI5HfAA0YHOHGhFBYHEZ0JBADIwASDkTYDLTrDvpKHuwAO4ai4Kxn8k7S2Xy-rqiiMgB0JKx5I6nSUjLG4AAtNHFiMMVA1lsdgB5U4ACx+hO4ywlNO+sNFnO+5NYsMRqzeyzAirhSJ+6tL5crYCpSrr32ZZu46IFUFAYImAlstgyWEQ7iy9jAAAFTptI+xwRxRQvvt8i24hzhGhlEuYsJ5Gop1QUclgBO5EoBREDA5UIVT3sjqDUs1hoBUAIiCoVKIETVWxgO4ODoBk4R+gOgCoIHE75gIAsiB0DeJAHgIR6IDer7zGA6RyOI6g4Fg6o5LYaAuOe7hgIwADK+SJOopBYLMVj4OIhTEagLhhKg6qCOoniyOkeC2AIVQ1B4KHYIg9RgKIeEkMIkIDmmpynKwmyQsAwD2lpfqauwmzSm8rCnBsDJ+kW9LADynLLJswBpo8PKIpynIANbADKqyyps7CRg8nJfLZun6aSRmRgAzJGACcfpKfCqwAMSRnOC5LuwK4-Ou3yRjm8LwuwnybEMcYRoOmgWPoNhTksfbADOyWLsupyrplKwynK7Dkt6YCphmHYldGkaxkAA)
    - [Тест](https://docs.google.com/forms/d/e/1FAIpQLScGHVFdzcK747iP5ZToxucNWiFQSRcSrmwk6MC_nA9fQA7ZQQ/viewform?usp=sf_link)
 - Полезные штуки
    - [Задание #11](https://www.typescriptlang.org/play?#code/PQKgBI6CCAwggsIFi8IIDhBCsIALgFBi2QBCDKoNwgig7CCDCIIJwggQiDJiAiIKfIFwggYiCKByIGAI5iVSMA0YQOIglQHwggRhBA0iBh4NKQVFhRgCRBE40YzCNRgHhBA-CCICgeRBWiMGb2jAgiAEagJhBJlgrKRHM2O1tHwroomHkoMGIoAytAGRAMbDAAIgBGAAYwAEsAZzAAU04AVwBDABt0gBcAezBEgDowACYAVhT0rLzCsFKa2qrqpLTMnILisq6Y9yxADBArJ3CyKhoigE8ABwywAHM8gCcAEwBaSUEScWRAZhAoGbAAY1zUot2K9BBgdHRkgDsijPWAM1zz5YBBMAAbxGYE+JRKqDAAApcpCXtkALYAIw+AEowABeAB8YHhyI+AG50ABfJ6vd5fH7LABCQJBYIh0NhuMRKPWgiRcNZaMxOLxbKJ0RKRQAFh9IVD0diWfj1kTSc83h9vr8wABhOnRJG5dYS5n8nnSg1yklPT7ZF7nIrJEovLgwyEAgA+YFpLrVqK5ss12HWGSK2XWdri8qeoDAgHwQQACIKI7Mgo4wgg90OdbdcuHFMfbAaDwXqvWypTjcmBiaiiamXunONUs5woTmGXqOUWwCWANRgJGCYVi3XQ1txeplitpopcADMdYbXZ1kJL0pLZaeldSJXyGQq+RKKyhAAMACSAzhxYkNXrNAblBJVI81s89Jr9VqDDpgO8Th+NPotNpdPflkAA)
    - [Задание #12](https://www.typescriptlang.org/play?#code/PQKgBI6CCAwggsIFi8IIDhBCsIALgFBi2QxCCEYQZQARBFAhEGTAEMA7ATzEGEQMExQfhBA+EECYQMAZQFcBbAGK8qAYwA0YAKIBHXhQA2AZ2FiwiMACUApgDdtAJ1HbVo9WDYtEgCRBS5RIFEQJlEBcIOMzZA4iAk2eQNIgYPDk-oDcIGwWtnhsLmAubIA8IFYhgPIggGIgiIgAdGCA+CBsgIIgIeQcfuwhQUjJsWxwYFxx8PlsIRowzYBsIPDh-iSAMiBgAMxg+YTRiBjYYABESgKSAEwArFMeWFPacopKkgAuBrzaU+6TUwZ6hsaSALQAjAAMKyDA6Og7NAAO2jwCpmAAvJRaABuV4fL6yeTKX4A6g0EFvT5ac5GEwiMww4EvBFfUxKf7fIRosAAH2kmyhRNJOn0KNMIPQADM0TsAJYAeyoYAZbLZAAoKKgwFQBAAjQySEWC4X8MUGSRMsRKQW4gCUYAA3qswEoAO4snaiAAWYF5CtESky2LVmsmk1EFCUXxmAimE1t7tEHKUbIU2kyCjZAHNec7+EcuWiLWb+RKVSqQe73SKzhQANYJxP2x3TDaQpSurWJsCeqje33+oMh3NbcNmqNomNgEVxjNFrDJ7Rp1u2rNOs404wFtvYEtlv0B4OnZGD+WRzLRihxwuJjtdrUAX3Qm8ZPN590kN0WknVYGxgtDtbRgsbzf+AD5KGAANRNsDr+M7vkDO6Sb-H09gue1bKJeYjXhQsb3o+fwwa+74gtyfL7mA9w-hqAGfOe-YXIcs5gdBD5XBQb7xkAA)
- *.d.ts
    - Написать файл декларации типов для файла [vector.js](https://gist.github.com/byTimo/c51bc16d8c48e676da840f3f892b14c6)
- [React+TS](https://github.com/kontur-web-courses/typescript/tree/master/react-typescript-task)
