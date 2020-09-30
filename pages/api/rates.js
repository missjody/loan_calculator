export default (req, res) => {
    res.status(200).json({
        "loans": {
            "New": [
                {
                    "term": "60",
                    "rate": {
                        "APlus": 4.09,
                        "A": 4.49,
                        "B": 5.24,
                        "C": 6.24,
                        "D": 8.24
                    }
                },
                {
                    "term": "72",
                    "rate": {
                        "APlus": 4.49,
                        "A": 5.49,
                        "B": 5.99,
                        "C": 6.99,
                        "D": 8.99
                    }
                },
                {
                    "term": "84",
                    "rate": {
                        "APlus": 4.99,
                        "A": 5.99,
                        "B": 7.09,
                        "C": 8.09,
                        "D": 10.09
                    }
                }
            ],
            "Used": [
                {
                    "term": "60",
                    "rate": {
                        "APlus": 4.49,
                        "A": 5.49,
                        "B": 6.34,
                        "C": 7.09,
                        "D": 9.09
                    }
                },
                {
                    "term": "72",
                    "rate": {
                        "APlus": 4.99,
                        "A": 6.19,
                        "B": 7.34,
                        "C": 8.09,
                        "D": 10.09
                    }
                },
                {
                    "term": "84",
                    "rate": {
                        "APlus": 5.24,
                        "A": 6.24,
                        "B": 7.99,
                        "C": 8.74,
                        "D": 10.74
                    }
                }
            ]
        }
    })
}