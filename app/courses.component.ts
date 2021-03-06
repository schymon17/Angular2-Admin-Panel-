import {Component} from '@angular/core';
import {CourseService} from './course.service';
import {AutoGrowDirective} from './auto-grow.directive';
@Component({
    selector: 'courses',
    template: `
        <h2>Courses</h2>
        {{title}}
        <input type="text" autoGrow />
        <ul>
            <li *ngFor="let course of courses">
                {{course}}
            </li>
        </ul>
    `,
    providers: [CourseService],
    directives: [AutoGrowDirective],
})
export class CourseComponent {
    title = "The title of courses page";
    courses : string[];
    constructor(courseService: CourseService){
        this.courses = courseService.getCourses();
    }
}