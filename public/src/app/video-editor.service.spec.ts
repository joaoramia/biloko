/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VideoEditorService } from './video-editor.service';

describe('VideoEditorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VideoEditorService]
    });
  });

  it('should ...', inject([VideoEditorService], (service: VideoEditorService) => {
    expect(service).toBeTruthy();
  }));
});
