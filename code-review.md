# How to do a code review... during Geosoft II

The code review process during Geosoft II shall be quite lean.
There is no sense in a complex process in the given amount of time, but the following steps should be roughly followed.
We also do not plan to use a [code review platform](http://en.wikipedia.org/wiki/List_of_tools_for_code_review) but will stick to the features which GitHub provides and in-person meetings.

The grading scheme allocates 8 hours to this process.
This includes the code-review meeting with the whole group (2 hours) and the meeting with the original authors (~ 1 hour), which leaves you with 5 hours to do the review.
Bear this in mind as this will strongly influence the expected amount of review comments.
The review process below also includes some pointers with respect to work efforts.

It is not a particular requirement that the reviewer is familiar with the programming language, as this is an academic exercise and the gain in experience is more important than eventual effectivity.

## Before the review

1. *In the seminar* the reviewers and reviewees are matched randomly.
1. Create a new issue "Code review" (or several issues if the reviewed code is split across repositories) on your repository that will be reviewed by somebody else.
1. Get acquainted with the different types of code review by reading [this Wikipedia article](http://en.wikipedia.org/wiki/Code_review).

## The review

Whenever the word "document" is used, it means that the findings of a step must be included in the code review report.

1. Download the code you have to review and identify the programming language.
1. Compile a checklist for your code review based on (a selection of) the following sites, or just google yourself (probably takes 1-2 hours). Include your own experiences as a developer. Divide the list in language independent and language specific items. You are free to collaborate on the checklists after you published a first version - just use the course's discussion forum to get in touch with your fellow students.
  * http://java.dzone.com/articles/java-code-review-checklist
  * https://wiki.apache.org/hadoop/CodeReviewChecklist
  * https://wiki.openmrs.org/display/docs/Code+Review+Checklist
  * http://www.codeproject.com/Articles/524235/Codeplusreviewplusguidelines
  * http://msdn.microsoft.com/en-us/library/ms182019%28v=vs.100%29.aspx
  * http://www.perlmonks.org/?node_id=744932
  * http://smartbear.com/SmartBear/media/pdfs/WP-CC-11-Best-Practices-of-Peer-Code-Review.pdf
  * https://www.liberty.edu/media/1414/%5B6401%5Dcode_review_checklist.pdf
  * http://eugenedvorkin.com/agile-code-review-guidelines/
1. Publish your checklist somewhere accessible online (etherpad, GitHub page, personal website, ...)
1. Try building / installing the code without looking at any documentation (this of course only makes sense if you are familiar with the programming language). Document how far you got.
1. Look at the documentation and try to install and run the software (take at maximum 1 hour to do this, the code review is more important than installation testing). Document how far you got.
1. Import the code into a development environment. Document how far you got.
1. Take a look at the source code
  1. Try to get an overall feel for the architecture. Document what you understand and what not.
  1. Work through your self-created check list.
  1. If applicable, run automated code analysis tools.
1. Compile the code review report in form of a reply to the respective "Code review" issue(s). @mention the lecturers to notify about the review submission.

## After the review

1. Read these guidelines about *how* to communicate a code review: https://github.com/thoughtbot/guides/tree/master/code-review
1. Have an in-person meeting with the group and go through all you comments. Plan at least 2 hours for this. Discuss and learn yourself why the group made certain choices.
1. After the meeting with the original authors, create a prioritized list of things that should definetely be changed (A - critical, B - major, C - minor, D - no change required/comment) and the estimated work (1 - high/days, 2 - medium/hours, 3 - low/minutes) and add it as a comment to the "Code review" issue.
1. Attend the code review meeting. Be prepared to give a one-minute summary of your review and actively join the discussion about code style and code quality.

## Automated Code Analysis Tools 

There are of course also [automated tools for code analysis/review](http://en.wikipedia.org/wiki/Automated_code_review). A comprehensive list of static analysis tools is available here: http://en.wikipedia.org/wiki/List_of_tools_for_static_code_analysis. Some of these tools are available online or can be added as extensions of IDEs, so it is worth checking them out and integrating them into your development workflows, even beyond the code review phase.
