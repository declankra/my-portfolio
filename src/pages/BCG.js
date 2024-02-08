import React from "react";
import './BCG.css'


const BCGResumePath = process.env.PUBLIC_URL + '/DeclanKramper_ResumeBCG.pdf';

function BCG() {
    return (
        <main>
            <h1>Hi BCG</h1>
            <p>Application for REF #62054</p>
            <object data={BCGResumePath} type="application/pdf" width="100%" height="1000px">
                <p>Your browser does not support PDFs. Please download the PDF to view it: <a href={BCGResumePath}>Download PDF</a>.</p>
            </object>
            <h3>Recent feedback:</h3>
            <div className="feedback-section">
                <h4>1. What are some tips or suggestions for Declan to use in the future?</h4>
                <blockquote>
                    <strong>[TS]</strong> – A couple of things I would convey: Keep working hard, you’ve got the skills and the drive to go as far as you want. Continue to learn and grow in all aspects of your life. This job will demand a lot out of you, so create / maintain a balance where to your personal pursuits have equal merit. Stay hungry. Learn new concepts, tech and don’t be afraid to mess up (it means you’re growing).
                </blockquote>
                <blockquote>
                    <strong>[EP]</strong> – Tyler’s comments are spot on. You have a great mind for Product, and even with your first job, are already impressive. Keep learning and working, and you will go far.
                </blockquote>
                
                <h4>2. What could Declan do differently in the future to better contribute to the team?</h4>
                <blockquote>
                    <strong>[TS]</strong> – I think Declan can do a better job in reaching out for guidance / coaching. Given he is a self-starter, we often just counted on him figuring things out (which he did), but he can grow faster by demanding attention / support when needed. It’s not an admission that he couldn’t do it, but will enable him to reach his goals faster.  If he wasn’t getting the support or guidance, it’s completely fair to demand it (rather than taking on that burden himself).  Similarly, I encourage him to find his voice a bit more. As with all new experiences, a person may end up in a submissive stance and just end up doing.  He was a leader and his instincts were right in most cases – he should be confident and assert himself to what he believes is right – people will follow.
                </blockquote>
                <blockquote>
                    <strong>[EP]</strong> – The only thing here I would reiterate is the comment about finding his voice, and not just ending up doing.  As I said above, he has a great mind for product and should trust that.  Be a leader, not just an organizer.
                </blockquote>

                <h4>3. What specific aspects of Declan's work have stood out to you?</h4>
                <blockquote>
                    <strong>[TS]</strong> – I believe that Declan can and will be a valuable contributor to PS and the accounts they service. During his tenure on the SBR account, Declan quickly proved himself to be a reliable, motivated and talented individual that significantly improved our digital applications through his leadership on the Product side. I offer a few notable characteristics that Declan brought to the table on a consistent basis:
1.       Self-Starter – Declan was self-motivated to get to an outcome, which is perhaps the GREATEST skill a product person can have. In the early outset of the PRE-Purchase stream, there was little oversight or coaching provided to Declan on how to solve problems or there was ambiguity in the nuances / details for bringing features to market. Declan always found a way to find the information, organize it in a manner where everyone could understand it and deliver.  If he didn’t know the answer or how to approach things, he would do the research (talking with development or business) to figure out an approach. As a result, he could always be counted on to produce good work.
2.       Organized, Prepared and Communicative – Declan set an exceptionally high bar in managing the backlog and preparing the team for entry of each and every SPRINT.  The backlog was well-groomed, the stories were clear (with executable ACs) and he had command of the team’s work (prescribing, answering questions and resolving concerns). The culmination / output of these actions was a high-degree of trust within the team.  Everyone could look to Declan for guidance and understanding.  
3.       Learning Mindset – When Declan first joined, he was fairly green to FE development and AGILE practices (like SAFe PI Planning).  Over his time here, he approached his job with a tenacity to learn and become better. In 1.5 years, he’s become a much better product person through his inquisitive nature and willingness to learn from those around him.  
                </blockquote>
                <blockquote>
                    <strong>[EP]</strong> – I would reiterate the above, and add that he has the personality to be a natural leader.  He is even keeled, calm, incredibly bright, and eager to learn.  With a bit more experience and confidence, he will be fantastic.
                </blockquote>

                <h4>4. What new skills would you like to see Declan develop to apply in a similar role?</h4>
                <blockquote>
                    <strong>[TS]</strong> – I think a natural progression for Declan is two-fold: Technical Growth / Understanding and Feature Solution Development. 
1.       Continued Technical Growth - Declan has progressed a ton in his understanding of Adobe Stack and how to navigate within the system. His demo’s are crisp and he flows through with mastery. I would encourage him to continue pursuit of technical understanding / capabilities of the next system (whether its FE or otherwise) to add more tools / skills to his set.  In this he should work with Solutions Architects to understand the patterns in which they want things developed (and WHY).  This will accelerate his depth of understand and his growth in the discipline.
2.       Feature Solution Development – In line with the above, Declan should start his transition from execution of stories to creating solutions. Finding the right way to create a feature from UX to Technical solution is hard.  He can start learning the skills of this by writing feature briefs, gathering the necessary parties together and working towards a solution design with the systems, data and capabilities of the project. This is the start to the progression to becoming a Product Manager.
                </blockquote>
                <blockquote>
                    <strong>[EP]</strong> – I would reiterate the above again, especially the comment about taking something from the ideation stage to the executable. 
                </blockquote>

                <h4>5. How would you rate Declan's overall performance on a scale of 1-10?</h4>
                <blockquote>
                    <strong>[TS]</strong> – In my eyes, Declan did an amazing job for his time on the SBR account.  I’d rank him at a 9. 
                </blockquote>
                <blockquote>
                    <strong>[EP]</strong> –  I would echo the 9.  Very good job.
                </blockquote>

                <h4>6. What could Declan do differently in the future to better contribute to the team?</h4>
                <blockquote>
                    <strong>[TS]</strong> – Covered a lot in the above.  I’d just say that in addition to a high-level of output professionally, Declan is a good person. He is always even-keeled, polite and positive.  This creates a welcoming and respectful environment.  I think he can go far and PS is lucky to have him!
                </blockquote>

            </div>
            
        </main>
    );
}

export default BCG;
